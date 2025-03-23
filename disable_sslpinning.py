from objection.state.connection import state_connection
from objection.utils.agent import Agent


state_connection.gadget_name = "{appPackageName}"
state_connection.agent = Agent()
state_connection.agent.inject()
api = state_connection.get_api()
api.android_ssl_pinning_disable(False)

inputCommand = input("input any word to quit!!!")
