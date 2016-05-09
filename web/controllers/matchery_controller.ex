defmodule Hextech.MatcheryController do
  use Hextech.Web, :controller

  def craft(conn, %{"region" => region, "summoner_name" => summoner_name}) do
    r = Viktor.Operation.Summoner.by_name(region, summoner_name)[summoner_name]
    with_score = Map.put(r, "masteryScore", Viktor.mastery_score(region, r["id"]))
    with_champions = Map.put(with_score, "champions", Viktor.champion_masteries(region, r["id"]))
#   Viktor.champion_masteries("na", 21066) |> Enum.map(&(Map.drop(&1, ["playerId"]))) |> Map.new(&{&1["championId"], &1})
#   Viktor.static_data_champion("na")["data"] |> Map.values |> Map.new(&({&1["id"], %{"championName" => &1["name"]}}))
#   Map.merge(a, sd, fn _k, v1, v2 -> Map.merge(v1, v2) end) |> Map.values
    json conn, Map.merge(r, with_champions)
  end

end
