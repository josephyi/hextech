defmodule Hextech do
  use Application

  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Start the endpoint when the application starts
      supervisor(Hextech.Endpoint, []),
      # Start the Ecto repository
      # supervisor(Hextech.Repo, []),
      # Here you could define other workers and supervisors as children
      # worker(Hextech.Worker, [arg1, arg2, arg3]),
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Hextech.Supervisor]
    Supervisor.start_link(children, opts)
    Viktor.start_link
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    Hextech.Endpoint.config_change(changed, removed)
    :ok
  end
end
