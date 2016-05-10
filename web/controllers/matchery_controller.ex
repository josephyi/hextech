defmodule Hextech.MatcheryController do
  use Hextech.Web, :controller

  @metadata File.read!("data/fun.json") |> Poison.decode!

  def craft(conn, %{"region" => region, "summoner_name" => summoner_name}) do
    summoner = Viktor.Operation.Summoner.by_name(region, summoner_name)[summoner_name]

    champion_info = Viktor.champion_masteries("na", summoner["id"]) |> Enum.map(&(Map.drop(&1, ["playerId"]))) |> Map.new(&{Integer.to_string(&1["championId"]), &1})
    |> Map.merge(@metadata, fn _k, v1, v2 -> Map.merge(v1, v2) end)
    |> Map.values

    result = Map.put(summoner, "masteryScore", Viktor.mastery_score(region, summoner["id"]))
    |> Map.put("champions", champion_info)

#   Viktor.champion_masteries("na", 21066) |> Enum.map(&(Map.drop(&1, ["playerId"]))) |> Map.new(&{Integer.to_string(&1["championId"]), &1})
#   Viktor.static_data_champion("na")["data"] |> Map.values |> Map.new(&({&1["id"], %{"championName" => &1["name"]}}))
#   Map.merge(a, sd, fn _k, v1, v2 -> Map.merge(v1, v2) end) |> Map.values
    json conn, result
  end

end
