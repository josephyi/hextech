defmodule Mix.Tasks.Hextech.ImageProcessor do
  use Mix.Task

  alias Imagineer.Image

  def run(_) do
    Mix.Task.run "app.start", []
    version = Viktor.Operation.StaticData.version("na") |> Enum.at(0)

    static_champions = Viktor.static_data_champion("na", [dataById: "true", champData: "image"])["data"]
    images = static_champions
    |> Map.values
    |> Enum.map(&(&1["image"]))
    |> Enum.map(&(&1["full"]))

    Enum.each(images, fn(x) ->
      path = "/tmp/#{x}"
      unless File.exists?(path) do
        %HTTPoison.Response{body: body} = HTTPoison.get!("http://ddragon.leagueoflegends.com/cdn/#{version}/img/champion/#{x}")
        File.write!(path, body)
      end
    end
    )

    static_champions
    |> Map.values
    |> Map.new(&({Integer.to_string(&1["id"]), %{
      "name" => &1["name"],
      "hex" => (&1["image"] |> Map.fetch!("full") |> avg_rgb("/tmp")),
      "dec" => (&1["image"] |> Map.fetch!("full") |> avg_rgb("/tmp")) |> Hexate.to_integer
      }}))
    |> Poison.encode! |> IO.puts
  end

  def avg_rgb(filename, path) do
    {:ok, png} = Imagineer.load("#{path}/#{filename}")
    png.pixels
    |> List.flatten
    |> Enum.map(&(Tuple.to_list(&1)))
    |> Enum.reduce([0,0,0], &([Enum.at(&1, 0) + Enum.at(&2, 0), Enum.at(&1, 1) + Enum.at(&2, 1), Enum.at(&1, 2) + Enum.at(&2, 2)]))
    |> Enum.map(&(&1/(png.width * png.height)))
    |> Enum.map(&(Hexate.encode(&1)))
    |> Enum.join
  end
end