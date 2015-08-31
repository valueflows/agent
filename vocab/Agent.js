module.exports = {
  id: 'Agent',
  prefixes: require('./prefixes'),
  description: 'An actor with agency.',
  context: 'open:Agent',
  properties: {
    id: {
      context: '@id',
      description: 'The identifier of the agent.',
      type: 'string',
      format: 'uri',
      required: true
    },
    agentType: {
      context: 'open:agentType',
      description: 'The type of agent.',
      $ref: 'AgentType',
      required: true
    },
    name: {
      context: 'schema:name',
      description: 'The primary name of the agent.',
      type: 'string'
    },
    image: {
      context: 'schema:image',
      description: 'An avatar of the agent.',
      type: 'string',
      format: 'uri'
    }
  }
}
