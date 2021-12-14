const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "okta/okta@~> 3.20.2",
  cdktfVersion: '^0.8',
  constructsVersion: "^10.0.0",
  minNodeVersion: "12.19.0",
  jsiiVersion: "^1.46.0",
});

project.synth();
