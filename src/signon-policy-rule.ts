// https://www.terraform.io/docs/providers/okta/r/signon_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignonPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#access SignonPolicyRule#access}
  */
  readonly access?: string;
  /**
  * Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#authtype SignonPolicyRule#authtype}
  */
  readonly authtype?: string;
  /**
  * List of behavior IDs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#behaviors SignonPolicyRule#behaviors}
  */
  readonly behaviors?: string[];
  /**
  * Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider SignonPolicyRule#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider_ids SignonPolicyRule#identity_provider_ids}
  */
  readonly identityProviderIds?: string[];
  /**
  * Elapsed time before the next MFA challenge
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_lifetime SignonPolicyRule#mfa_lifetime}
  */
  readonly mfaLifetime?: number;
  /**
  * Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_prompt SignonPolicyRule#mfa_prompt}
  */
  readonly mfaPrompt?: string;
  /**
  * Remember MFA device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_remember_device SignonPolicyRule#mfa_remember_device}
  */
  readonly mfaRememberDevice?: boolean | cdktf.IResolvable;
  /**
  * Require MFA.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_required SignonPolicyRule#mfa_required}
  */
  readonly mfaRequired?: boolean | cdktf.IResolvable;
  /**
  * Policy Rule Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#name SignonPolicyRule#name}
  */
  readonly name: string;
  /**
  * Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_connection SignonPolicyRule#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * The zones to exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_excludes SignonPolicyRule#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * The zones to include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_includes SignonPolicyRule#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * Policy ID of the Rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policy_id SignonPolicyRule#policy_id}
  */
  readonly policyId?: string;
  /**
  * Policy ID of the Rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policyid SignonPolicyRule#policyid}
  */
  readonly policyid?: string;
  /**
  * Primary factor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_factor SignonPolicyRule#primary_factor}
  */
  readonly primaryFactor?: string;
  /**
  * Policy Rule Priority, this attribute can be set to a valid priority. To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#priority SignonPolicyRule#priority}
  */
  readonly priority?: number;
  /**
  * Risc level: ANY, LOW, MEDIUM or HIGH
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#risc_level SignonPolicyRule#risc_level}
  */
  readonly riscLevel?: string;
  /**
  * Max minutes a session can be idle.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_idle SignonPolicyRule#session_idle}
  */
  readonly sessionIdle?: number;
  /**
  * Max minutes a session is active: Disable = 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_lifetime SignonPolicyRule#session_lifetime}
  */
  readonly sessionLifetime?: number;
  /**
  * Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_persistent SignonPolicyRule#session_persistent}
  */
  readonly sessionPersistent?: boolean | cdktf.IResolvable;
  /**
  * Policy Rule Status: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#status SignonPolicyRule#status}
  */
  readonly status?: string;
  /**
  * Set of User IDs to Exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#users_excluded SignonPolicyRule#users_excluded}
  */
  readonly usersExcluded?: string[];
  /**
  * factor_sequence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_sequence SignonPolicyRule#factor_sequence}
  */
  readonly factorSequence?: SignonPolicyRuleFactorSequence[] | cdktf.IResolvable;
}
export interface SignonPolicyRuleFactorSequenceSecondaryCriteria {
  /**
  * Type of a Factor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_type SignonPolicyRule#factor_type}
  */
  readonly factorType: string;
  /**
  * Factor provider
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#provider SignonPolicyRule#provider}
  */
  readonly provider: string;
}

export function signonPolicyRuleFactorSequenceSecondaryCriteriaToTerraform(struct?: SignonPolicyRuleFactorSequenceSecondaryCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    factor_type: cdktf.stringToTerraform(struct!.factorType),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}

export interface SignonPolicyRuleFactorSequence {
  /**
  * Type of a Factor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_factor_type SignonPolicyRule#primary_criteria_factor_type}
  */
  readonly primaryCriteriaFactorType: string;
  /**
  * Factor provider
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_provider SignonPolicyRule#primary_criteria_provider}
  */
  readonly primaryCriteriaProvider: string;
  /**
  * secondary_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#secondary_criteria SignonPolicyRule#secondary_criteria}
  */
  readonly secondaryCriteria?: SignonPolicyRuleFactorSequenceSecondaryCriteria[] | cdktf.IResolvable;
}

export function signonPolicyRuleFactorSequenceToTerraform(struct?: SignonPolicyRuleFactorSequence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_criteria_factor_type: cdktf.stringToTerraform(struct!.primaryCriteriaFactorType),
    primary_criteria_provider: cdktf.stringToTerraform(struct!.primaryCriteriaProvider),
    secondary_criteria: cdktf.listMapper(signonPolicyRuleFactorSequenceSecondaryCriteriaToTerraform)(struct!.secondaryCriteria),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule okta_signon_policy_rule}
*/
export class SignonPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_signon_policy_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule okta_signon_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignonPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SignonPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_signon_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._access = config.access;
    this._authtype = config.authtype;
    this._behaviors = config.behaviors;
    this._identityProvider = config.identityProvider;
    this._identityProviderIds = config.identityProviderIds;
    this._mfaLifetime = config.mfaLifetime;
    this._mfaPrompt = config.mfaPrompt;
    this._mfaRememberDevice = config.mfaRememberDevice;
    this._mfaRequired = config.mfaRequired;
    this._name = config.name;
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._policyId = config.policyId;
    this._policyid = config.policyid;
    this._primaryFactor = config.primaryFactor;
    this._priority = config.priority;
    this._riscLevel = config.riscLevel;
    this._sessionIdle = config.sessionIdle;
    this._sessionLifetime = config.sessionLifetime;
    this._sessionPersistent = config.sessionPersistent;
    this._status = config.status;
    this._usersExcluded = config.usersExcluded;
    this._factorSequence = config.factorSequence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // authtype - computed: false, optional: true, required: false
  private _authtype?: string; 
  public get authtype() {
    return this.getStringAttribute('authtype');
  }
  public set authtype(value: string) {
    this._authtype = value;
  }
  public resetAuthtype() {
    this._authtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtypeInput() {
    return this._authtype;
  }

  // behaviors - computed: false, optional: true, required: false
  private _behaviors?: string[]; 
  public get behaviors() {
    return cdktf.Fn.tolist(this.getListAttribute('behaviors'));
  }
  public set behaviors(value: string[]) {
    this._behaviors = value;
  }
  public resetBehaviors() {
    this._behaviors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorsInput() {
    return this._behaviors;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
  }

  // identity_provider_ids - computed: false, optional: true, required: false
  private _identityProviderIds?: string[]; 
  public get identityProviderIds() {
    return this.getListAttribute('identity_provider_ids');
  }
  public set identityProviderIds(value: string[]) {
    this._identityProviderIds = value;
  }
  public resetIdentityProviderIds() {
    this._identityProviderIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdsInput() {
    return this._identityProviderIds;
  }

  // mfa_lifetime - computed: false, optional: true, required: false
  private _mfaLifetime?: number; 
  public get mfaLifetime() {
    return this.getNumberAttribute('mfa_lifetime');
  }
  public set mfaLifetime(value: number) {
    this._mfaLifetime = value;
  }
  public resetMfaLifetime() {
    this._mfaLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaLifetimeInput() {
    return this._mfaLifetime;
  }

  // mfa_prompt - computed: false, optional: true, required: false
  private _mfaPrompt?: string; 
  public get mfaPrompt() {
    return this.getStringAttribute('mfa_prompt');
  }
  public set mfaPrompt(value: string) {
    this._mfaPrompt = value;
  }
  public resetMfaPrompt() {
    this._mfaPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaPromptInput() {
    return this._mfaPrompt;
  }

  // mfa_remember_device - computed: false, optional: true, required: false
  private _mfaRememberDevice?: boolean | cdktf.IResolvable; 
  public get mfaRememberDevice() {
    return this.getBooleanAttribute('mfa_remember_device');
  }
  public set mfaRememberDevice(value: boolean | cdktf.IResolvable) {
    this._mfaRememberDevice = value;
  }
  public resetMfaRememberDevice() {
    this._mfaRememberDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaRememberDeviceInput() {
    return this._mfaRememberDevice;
  }

  // mfa_required - computed: false, optional: true, required: false
  private _mfaRequired?: boolean | cdktf.IResolvable; 
  public get mfaRequired() {
    return this.getBooleanAttribute('mfa_required');
  }
  public set mfaRequired(value: boolean | cdktf.IResolvable) {
    this._mfaRequired = value;
  }
  public resetMfaRequired() {
    this._mfaRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaRequiredInput() {
    return this._mfaRequired;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_connection - computed: false, optional: true, required: false
  private _networkConnection?: string; 
  public get networkConnection() {
    return this.getStringAttribute('network_connection');
  }
  public set networkConnection(value: string) {
    this._networkConnection = value;
  }
  public resetNetworkConnection() {
    this._networkConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionInput() {
    return this._networkConnection;
  }

  // network_excludes - computed: false, optional: true, required: false
  private _networkExcludes?: string[]; 
  public get networkExcludes() {
    return this.getListAttribute('network_excludes');
  }
  public set networkExcludes(value: string[]) {
    this._networkExcludes = value;
  }
  public resetNetworkExcludes() {
    this._networkExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExcludesInput() {
    return this._networkExcludes;
  }

  // network_includes - computed: false, optional: true, required: false
  private _networkIncludes?: string[]; 
  public get networkIncludes() {
    return this.getListAttribute('network_includes');
  }
  public set networkIncludes(value: string[]) {
    this._networkIncludes = value;
  }
  public resetNetworkIncludes() {
    this._networkIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIncludesInput() {
    return this._networkIncludes;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policyid - computed: false, optional: true, required: false
  private _policyid?: string; 
  public get policyid() {
    return this.getStringAttribute('policyid');
  }
  public set policyid(value: string) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // primary_factor - computed: true, optional: true, required: false
  private _primaryFactor?: string; 
  public get primaryFactor() {
    return this.getStringAttribute('primary_factor');
  }
  public set primaryFactor(value: string) {
    this._primaryFactor = value;
  }
  public resetPrimaryFactor() {
    this._primaryFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryFactorInput() {
    return this._primaryFactor;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // risc_level - computed: false, optional: true, required: false
  private _riscLevel?: string; 
  public get riscLevel() {
    return this.getStringAttribute('risc_level');
  }
  public set riscLevel(value: string) {
    this._riscLevel = value;
  }
  public resetRiscLevel() {
    this._riscLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riscLevelInput() {
    return this._riscLevel;
  }

  // session_idle - computed: false, optional: true, required: false
  private _sessionIdle?: number; 
  public get sessionIdle() {
    return this.getNumberAttribute('session_idle');
  }
  public set sessionIdle(value: number) {
    this._sessionIdle = value;
  }
  public resetSessionIdle() {
    this._sessionIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdleInput() {
    return this._sessionIdle;
  }

  // session_lifetime - computed: false, optional: true, required: false
  private _sessionLifetime?: number; 
  public get sessionLifetime() {
    return this.getNumberAttribute('session_lifetime');
  }
  public set sessionLifetime(value: number) {
    this._sessionLifetime = value;
  }
  public resetSessionLifetime() {
    this._sessionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLifetimeInput() {
    return this._sessionLifetime;
  }

  // session_persistent - computed: false, optional: true, required: false
  private _sessionPersistent?: boolean | cdktf.IResolvable; 
  public get sessionPersistent() {
    return this.getBooleanAttribute('session_persistent');
  }
  public set sessionPersistent(value: boolean | cdktf.IResolvable) {
    this._sessionPersistent = value;
  }
  public resetSessionPersistent() {
    this._sessionPersistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistentInput() {
    return this._sessionPersistent;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // users_excluded - computed: false, optional: true, required: false
  private _usersExcluded?: string[]; 
  public get usersExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('users_excluded'));
  }
  public set usersExcluded(value: string[]) {
    this._usersExcluded = value;
  }
  public resetUsersExcluded() {
    this._usersExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersExcludedInput() {
    return this._usersExcluded;
  }

  // factor_sequence - computed: false, optional: true, required: false
  private _factorSequence?: SignonPolicyRuleFactorSequence[] | cdktf.IResolvable; 
  public get factorSequence() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('factor_sequence');
  }
  public set factorSequence(value: SignonPolicyRuleFactorSequence[] | cdktf.IResolvable) {
    this._factorSequence = value;
  }
  public resetFactorSequence() {
    this._factorSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorSequenceInput() {
    return this._factorSequence;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      authtype: cdktf.stringToTerraform(this._authtype),
      behaviors: cdktf.listMapper(cdktf.stringToTerraform)(this._behaviors),
      identity_provider: cdktf.stringToTerraform(this._identityProvider),
      identity_provider_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._identityProviderIds),
      mfa_lifetime: cdktf.numberToTerraform(this._mfaLifetime),
      mfa_prompt: cdktf.stringToTerraform(this._mfaPrompt),
      mfa_remember_device: cdktf.booleanToTerraform(this._mfaRememberDevice),
      mfa_required: cdktf.booleanToTerraform(this._mfaRequired),
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkIncludes),
      policy_id: cdktf.stringToTerraform(this._policyId),
      policyid: cdktf.stringToTerraform(this._policyid),
      primary_factor: cdktf.stringToTerraform(this._primaryFactor),
      priority: cdktf.numberToTerraform(this._priority),
      risc_level: cdktf.stringToTerraform(this._riscLevel),
      session_idle: cdktf.numberToTerraform(this._sessionIdle),
      session_lifetime: cdktf.numberToTerraform(this._sessionLifetime),
      session_persistent: cdktf.booleanToTerraform(this._sessionPersistent),
      status: cdktf.stringToTerraform(this._status),
      users_excluded: cdktf.listMapper(cdktf.stringToTerraform)(this._usersExcluded),
      factor_sequence: cdktf.listMapper(signonPolicyRuleFactorSequenceToTerraform)(this._factorSequence),
    };
  }
}
