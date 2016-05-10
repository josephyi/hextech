defmodule Mix.Tasks.Hextech.ImageProcessor do
  use Mix.Task

  alias Imagineer.Image

  def run(_) do
    Mix.Task.run "app.start", []
    version = Viktor.Operation.StaticData.version("na") |> Enum.at(0)

    birthdays = File.stream!("data/birthdays.csv") |> CSV.decode |> Map.new(&{Enum.at(&1, 0), Enum.at(&1,1)})

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

    output = static_champions
    |> Map.values
    |> Map.new(&({Integer.to_string(&1["id"]), %{
      "name" => &1["name"],
      "rgb" => (&1["image"] |> Map.fetch!("full") |> avg_rgb("/tmp")),
      "hex" => (&1["image"] |> Map.fetch!("full") |> avg_rgb("/tmp")) |> Enum.map(fn x -> Hexate.encode(String.to_integer(x)) end) |> Enum.join,
      "birthday" => Map.fetch!(birthdays, &1["name"])
      }}))
    |> Poison.encode!

    File.write!("data/fun.json", output)
  end

  def avg_rgb(filename, path) do
    {:ok, png} = Imagineer.load("#{path}/#{filename}")
    png.pixels
    |> List.flatten
    |> Enum.map(&(Tuple.to_list(&1)))
    |> Enum.reduce([0,0,0], &([Enum.at(&1, 0) + Enum.at(&2, 0), Enum.at(&1, 1) + Enum.at(&2, 1), Enum.at(&1, 2) + Enum.at(&2, 2)]))
    |> Enum.map(&(Integer.to_string(round(&1/(png.width * png.height)))))
  end
end