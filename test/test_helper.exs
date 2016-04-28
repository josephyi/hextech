ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Hextech.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Hextech.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Hextech.Repo)

