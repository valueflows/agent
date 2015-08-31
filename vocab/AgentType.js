module.exports = {
  id: 'AgentType',
  prefixes: require('./prefixes'),
  description: 'A type of agent.',
  context: 'open:AgentType',
  properties: {
    id: {
      context: '@id',
      description: 'The identifier of the agent type.',
      type: 'string',
      format: 'uri',
      required: true
    },
    name: {
      context: 'schema:name',
      description: 'The primary name of the agent type.',
      type: 'string'
    },
    description: {
      context: 'schema:description',
      description: 'A description of the agent type.',
      type: 'string'
    }
  }
}
