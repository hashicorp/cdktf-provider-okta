// https://www.terraform.io/docs/providers/okta/r/saml_idp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlIdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_action SamlIdp#account_link_action}
  */
  readonly accountLinkAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_group_include SamlIdp#account_link_group_include}
  */
  readonly accountLinkGroupInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_binding SamlIdp#acs_binding}
  */
  readonly acsBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_type SamlIdp#acs_type}
  */
  readonly acsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}
  */
  readonly deprovisionedAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_action SamlIdp#groups_action}
  */
  readonly groupsAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_assignment SamlIdp#groups_assignment}
  */
  readonly groupsAssignment?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_attribute SamlIdp#groups_attribute}
  */
  readonly groupsAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_filter SamlIdp#groups_filter}
  */
  readonly groupsFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#id SamlIdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer SamlIdp#issuer}
  */
  readonly issuer: string;
  /**
  * Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer_mode SamlIdp#issuer_mode}
  */
  readonly issuerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#kid SamlIdp#kid}
  */
  readonly kid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#max_clock_skew SamlIdp#max_clock_skew}
  */
  readonly maxClockSkew?: number;
  /**
  * Name of the IdP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name SamlIdp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name_format SamlIdp#name_format}
  */
  readonly nameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#profile_master SamlIdp#profile_master}
  */
  readonly profileMaster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#provisioning_action SamlIdp#provisioning_action}
  */
  readonly provisioningAction?: string;
  /**
  * algorithm to use to sign requests
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#request_signature_algorithm SamlIdp#request_signature_algorithm}
  */
  readonly requestSignatureAlgorithm?: string;
  /**
  * algorithm to use to sign response
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#request_signature_scope SamlIdp#request_signature_scope}
  */
  readonly requestSignatureScope?: string;
  /**
  * algorithm to use to sign requests
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#response_signature_algorithm SamlIdp#response_signature_algorithm}
  */
  readonly responseSignatureAlgorithm?: string;
  /**
  * algorithm to use to sign response
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#response_signature_scope SamlIdp#response_signature_scope}
  */
  readonly responseSignatureScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_binding SamlIdp#sso_binding}
  */
  readonly ssoBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_destination SamlIdp#sso_destination}
  */
  readonly ssoDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_url SamlIdp#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#status SamlIdp#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_filter SamlIdp#subject_filter}
  */
  readonly subjectFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_format SamlIdp#subject_format}
  */
  readonly subjectFormat?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}
  */
  readonly subjectMatchAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_type SamlIdp#subject_match_type}
  */
  readonly subjectMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#suspended_action SamlIdp#suspended_action}
  */
  readonly suspendedAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#username_template SamlIdp#username_template}
  */
  readonly usernameTemplate?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_idp okta_saml_idp}
*/
export class SamlIdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_saml_idp";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/saml_idp okta_saml_idp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlIdpConfig
  */
  public constructor(scope: Construct, id: string, config: SamlIdpConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_saml_idp',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountLinkAction = config.accountLinkAction;
    this._accountLinkGroupInclude = config.accountLinkGroupInclude;
    this._acsBinding = config.acsBinding;
    this._acsType = config.acsType;
    this._deprovisionedAction = config.deprovisionedAction;
    this._groupsAction = config.groupsAction;
    this._groupsAssignment = config.groupsAssignment;
    this._groupsAttribute = config.groupsAttribute;
    this._groupsFilter = config.groupsFilter;
    this._id = config.id;
    this._issuer = config.issuer;
    this._issuerMode = config.issuerMode;
    this._kid = config.kid;
    this._maxClockSkew = config.maxClockSkew;
    this._name = config.name;
    this._nameFormat = config.nameFormat;
    this._profileMaster = config.profileMaster;
    this._provisioningAction = config.provisioningAction;
    this._requestSignatureAlgorithm = config.requestSignatureAlgorithm;
    this._requestSignatureScope = config.requestSignatureScope;
    this._responseSignatureAlgorithm = config.responseSignatureAlgorithm;
    this._responseSignatureScope = config.responseSignatureScope;
    this._ssoBinding = config.ssoBinding;
    this._ssoDestination = config.ssoDestination;
    this._ssoUrl = config.ssoUrl;
    this._status = config.status;
    this._subjectFilter = config.subjectFilter;
    this._subjectFormat = config.subjectFormat;
    this._subjectMatchAttribute = config.subjectMatchAttribute;
    this._subjectMatchType = config.subjectMatchType;
    this._suspendedAction = config.suspendedAction;
    this._usernameTemplate = config.usernameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_link_action - computed: false, optional: true, required: false
  private _accountLinkAction?: string; 
  public get accountLinkAction() {
    return this.getStringAttribute('account_link_action');
  }
  public set accountLinkAction(value: string) {
    this._accountLinkAction = value;
  }
  public resetAccountLinkAction() {
    this._accountLinkAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLinkActionInput() {
    return this._accountLinkAction;
  }

  // account_link_group_include - computed: false, optional: true, required: false
  private _accountLinkGroupInclude?: string[]; 
  public get accountLinkGroupInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('account_link_group_include'));
  }
  public set accountLinkGroupInclude(value: string[]) {
    this._accountLinkGroupInclude = value;
  }
  public resetAccountLinkGroupInclude() {
    this._accountLinkGroupInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLinkGroupIncludeInput() {
    return this._accountLinkGroupInclude;
  }

  // acs_binding - computed: false, optional: true, required: false
  private _acsBinding?: string; 
  public get acsBinding() {
    return this.getStringAttribute('acs_binding');
  }
  public set acsBinding(value: string) {
    this._acsBinding = value;
  }
  public resetAcsBinding() {
    this._acsBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsBindingInput() {
    return this._acsBinding;
  }

  // acs_type - computed: false, optional: true, required: false
  private _acsType?: string; 
  public get acsType() {
    return this.getStringAttribute('acs_type');
  }
  public set acsType(value: string) {
    this._acsType = value;
  }
  public resetAcsType() {
    this._acsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsTypeInput() {
    return this._acsType;
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // deprovisioned_action - computed: false, optional: true, required: false
  private _deprovisionedAction?: string; 
  public get deprovisionedAction() {
    return this.getStringAttribute('deprovisioned_action');
  }
  public set deprovisionedAction(value: string) {
    this._deprovisionedAction = value;
  }
  public resetDeprovisionedAction() {
    this._deprovisionedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisionedActionInput() {
    return this._deprovisionedAction;
  }

  // groups_action - computed: false, optional: true, required: false
  private _groupsAction?: string; 
  public get groupsAction() {
    return this.getStringAttribute('groups_action');
  }
  public set groupsAction(value: string) {
    this._groupsAction = value;
  }
  public resetGroupsAction() {
    this._groupsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsActionInput() {
    return this._groupsAction;
  }

  // groups_assignment - computed: false, optional: true, required: false
  private _groupsAssignment?: string[]; 
  public get groupsAssignment() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_assignment'));
  }
  public set groupsAssignment(value: string[]) {
    this._groupsAssignment = value;
  }
  public resetGroupsAssignment() {
    this._groupsAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsAssignmentInput() {
    return this._groupsAssignment;
  }

  // groups_attribute - computed: false, optional: true, required: false
  private _groupsAttribute?: string; 
  public get groupsAttribute() {
    return this.getStringAttribute('groups_attribute');
  }
  public set groupsAttribute(value: string) {
    this._groupsAttribute = value;
  }
  public resetGroupsAttribute() {
    this._groupsAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsAttributeInput() {
    return this._groupsAttribute;
  }

  // groups_filter - computed: false, optional: true, required: false
  private _groupsFilter?: string[]; 
  public get groupsFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_filter'));
  }
  public set groupsFilter(value: string[]) {
    this._groupsFilter = value;
  }
  public resetGroupsFilter() {
    this._groupsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsFilterInput() {
    return this._groupsFilter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_mode - computed: false, optional: true, required: false
  private _issuerMode?: string; 
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }
  public set issuerMode(value: string) {
    this._issuerMode = value;
  }
  public resetIssuerMode() {
    this._issuerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerModeInput() {
    return this._issuerMode;
  }

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // max_clock_skew - computed: false, optional: true, required: false
  private _maxClockSkew?: number; 
  public get maxClockSkew() {
    return this.getNumberAttribute('max_clock_skew');
  }
  public set maxClockSkew(value: number) {
    this._maxClockSkew = value;
  }
  public resetMaxClockSkew() {
    this._maxClockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClockSkewInput() {
    return this._maxClockSkew;
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

  // name_format - computed: false, optional: true, required: false
  private _nameFormat?: string; 
  public get nameFormat() {
    return this.getStringAttribute('name_format');
  }
  public set nameFormat(value: string) {
    this._nameFormat = value;
  }
  public resetNameFormat() {
    this._nameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFormatInput() {
    return this._nameFormat;
  }

  // profile_master - computed: false, optional: true, required: false
  private _profileMaster?: boolean | cdktf.IResolvable; 
  public get profileMaster() {
    return this.getBooleanAttribute('profile_master');
  }
  public set profileMaster(value: boolean | cdktf.IResolvable) {
    this._profileMaster = value;
  }
  public resetProfileMaster() {
    this._profileMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileMasterInput() {
    return this._profileMaster;
  }

  // provisioning_action - computed: false, optional: true, required: false
  private _provisioningAction?: string; 
  public get provisioningAction() {
    return this.getStringAttribute('provisioning_action');
  }
  public set provisioningAction(value: string) {
    this._provisioningAction = value;
  }
  public resetProvisioningAction() {
    this._provisioningAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningActionInput() {
    return this._provisioningAction;
  }

  // request_signature_algorithm - computed: false, optional: true, required: false
  private _requestSignatureAlgorithm?: string; 
  public get requestSignatureAlgorithm() {
    return this.getStringAttribute('request_signature_algorithm');
  }
  public set requestSignatureAlgorithm(value: string) {
    this._requestSignatureAlgorithm = value;
  }
  public resetRequestSignatureAlgorithm() {
    this._requestSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSignatureAlgorithmInput() {
    return this._requestSignatureAlgorithm;
  }

  // request_signature_scope - computed: false, optional: true, required: false
  private _requestSignatureScope?: string; 
  public get requestSignatureScope() {
    return this.getStringAttribute('request_signature_scope');
  }
  public set requestSignatureScope(value: string) {
    this._requestSignatureScope = value;
  }
  public resetRequestSignatureScope() {
    this._requestSignatureScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSignatureScopeInput() {
    return this._requestSignatureScope;
  }

  // response_signature_algorithm - computed: false, optional: true, required: false
  private _responseSignatureAlgorithm?: string; 
  public get responseSignatureAlgorithm() {
    return this.getStringAttribute('response_signature_algorithm');
  }
  public set responseSignatureAlgorithm(value: string) {
    this._responseSignatureAlgorithm = value;
  }
  public resetResponseSignatureAlgorithm() {
    this._responseSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignatureAlgorithmInput() {
    return this._responseSignatureAlgorithm;
  }

  // response_signature_scope - computed: false, optional: true, required: false
  private _responseSignatureScope?: string; 
  public get responseSignatureScope() {
    return this.getStringAttribute('response_signature_scope');
  }
  public set responseSignatureScope(value: string) {
    this._responseSignatureScope = value;
  }
  public resetResponseSignatureScope() {
    this._responseSignatureScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignatureScopeInput() {
    return this._responseSignatureScope;
  }

  // sso_binding - computed: false, optional: true, required: false
  private _ssoBinding?: string; 
  public get ssoBinding() {
    return this.getStringAttribute('sso_binding');
  }
  public set ssoBinding(value: string) {
    this._ssoBinding = value;
  }
  public resetSsoBinding() {
    this._ssoBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoBindingInput() {
    return this._ssoBinding;
  }

  // sso_destination - computed: false, optional: true, required: false
  private _ssoDestination?: string; 
  public get ssoDestination() {
    return this.getStringAttribute('sso_destination');
  }
  public set ssoDestination(value: string) {
    this._ssoDestination = value;
  }
  public resetSsoDestination() {
    this._ssoDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoDestinationInput() {
    return this._ssoDestination;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
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

  // subject_filter - computed: false, optional: true, required: false
  private _subjectFilter?: string; 
  public get subjectFilter() {
    return this.getStringAttribute('subject_filter');
  }
  public set subjectFilter(value: string) {
    this._subjectFilter = value;
  }
  public resetSubjectFilter() {
    this._subjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFilterInput() {
    return this._subjectFilter;
  }

  // subject_format - computed: false, optional: true, required: false
  private _subjectFormat?: string[]; 
  public get subjectFormat() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_format'));
  }
  public set subjectFormat(value: string[]) {
    this._subjectFormat = value;
  }
  public resetSubjectFormat() {
    this._subjectFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFormatInput() {
    return this._subjectFormat;
  }

  // subject_match_attribute - computed: false, optional: true, required: false
  private _subjectMatchAttribute?: string; 
  public get subjectMatchAttribute() {
    return this.getStringAttribute('subject_match_attribute');
  }
  public set subjectMatchAttribute(value: string) {
    this._subjectMatchAttribute = value;
  }
  public resetSubjectMatchAttribute() {
    this._subjectMatchAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectMatchAttributeInput() {
    return this._subjectMatchAttribute;
  }

  // subject_match_type - computed: false, optional: true, required: false
  private _subjectMatchType?: string; 
  public get subjectMatchType() {
    return this.getStringAttribute('subject_match_type');
  }
  public set subjectMatchType(value: string) {
    this._subjectMatchType = value;
  }
  public resetSubjectMatchType() {
    this._subjectMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectMatchTypeInput() {
    return this._subjectMatchType;
  }

  // suspended_action - computed: false, optional: true, required: false
  private _suspendedAction?: string; 
  public get suspendedAction() {
    return this.getStringAttribute('suspended_action');
  }
  public set suspendedAction(value: string) {
    this._suspendedAction = value;
  }
  public resetSuspendedAction() {
    this._suspendedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedActionInput() {
    return this._suspendedAction;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_type_id - computed: true, optional: false, required: false
  public get userTypeId() {
    return this.getStringAttribute('user_type_id');
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_link_action: cdktf.stringToTerraform(this._accountLinkAction),
      account_link_group_include: cdktf.listMapper(cdktf.stringToTerraform)(this._accountLinkGroupInclude),
      acs_binding: cdktf.stringToTerraform(this._acsBinding),
      acs_type: cdktf.stringToTerraform(this._acsType),
      deprovisioned_action: cdktf.stringToTerraform(this._deprovisionedAction),
      groups_action: cdktf.stringToTerraform(this._groupsAction),
      groups_assignment: cdktf.listMapper(cdktf.stringToTerraform)(this._groupsAssignment),
      groups_attribute: cdktf.stringToTerraform(this._groupsAttribute),
      groups_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._groupsFilter),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      issuer_mode: cdktf.stringToTerraform(this._issuerMode),
      kid: cdktf.stringToTerraform(this._kid),
      max_clock_skew: cdktf.numberToTerraform(this._maxClockSkew),
      name: cdktf.stringToTerraform(this._name),
      name_format: cdktf.stringToTerraform(this._nameFormat),
      profile_master: cdktf.booleanToTerraform(this._profileMaster),
      provisioning_action: cdktf.stringToTerraform(this._provisioningAction),
      request_signature_algorithm: cdktf.stringToTerraform(this._requestSignatureAlgorithm),
      request_signature_scope: cdktf.stringToTerraform(this._requestSignatureScope),
      response_signature_algorithm: cdktf.stringToTerraform(this._responseSignatureAlgorithm),
      response_signature_scope: cdktf.stringToTerraform(this._responseSignatureScope),
      sso_binding: cdktf.stringToTerraform(this._ssoBinding),
      sso_destination: cdktf.stringToTerraform(this._ssoDestination),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      status: cdktf.stringToTerraform(this._status),
      subject_filter: cdktf.stringToTerraform(this._subjectFilter),
      subject_format: cdktf.listMapper(cdktf.stringToTerraform)(this._subjectFormat),
      subject_match_attribute: cdktf.stringToTerraform(this._subjectMatchAttribute),
      subject_match_type: cdktf.stringToTerraform(this._subjectMatchType),
      suspended_action: cdktf.stringToTerraform(this._suspendedAction),
      username_template: cdktf.stringToTerraform(this._usernameTemplate),
    };
  }
}
