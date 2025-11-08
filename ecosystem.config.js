module.exports = {
  apps: [{
    name: 'dnd-enhanced',
    script: 'complete-intelligent-server.js',
    cwd: '/opt/vodbase/dnd-campaign',
    env: {
      NODE_ENV: 'production',
      DEEPSEEK_API_KEY: 'sk-e9049322c48b4c1589bd4e4562a7ac96',
      OPENAI_API_KEY: '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',
      GOOGLE_API_KEY: 'AIzaSyCXmE3a4-T6P1R3NYcFqgiAWFfh97iqg_U',
      CLAUDE_API_KEY: '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'
    }
  }]
};
