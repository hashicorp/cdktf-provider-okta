// https://www.terraform.io/docs/providers/okta/d/app_saml.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAppSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search only ACTIVE applications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html#active_only DataOktaAppSaml#active_only}
  */
  readonly activeOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html#id DataOktaAppSaml#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html#label DataOktaAppSaml#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html#label_prefix DataOktaAppSaml#label_prefix}
  */
  readonly labelPrefix?: string;
  /**
  * Denotes whether the request is compressed or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html#request_compressed DataOktaAppSaml#request_compressed}
  */
  readonly requestCompressed?: boolean | cdktf.IResolvable;
  /**
  * Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html#skip_groups DataOktaAppSaml#skip_groups}
  */
  readonly skipGroups?: boolean | cdktf.IResolvable;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html#skip_users DataOktaAppSaml#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
}
export class DataOktaAppSamlAttributeStatements extends cdktf.ComplexComputedList {

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // filter_value - computed: true, optional: false, required: false
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html okta_app_saml}
*/
export class DataOktaAppSaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_app_saml";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/app_saml.html okta_app_saml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAppSamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaAppSamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_app_saml',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activeOnly = config.activeOnly;
    this._id = config.id;
    this._label = config.label;
    this._labelPrefix = config.labelPrefix;
    this._requestCompressed = config.requestCompressed;
    this._skipGroups = config.skipGroups;
    this._skipUsers = config.skipUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessibility_error_redirect_url - computed: true, optional: false, required: false
  public get accessibilityErrorRedirectUrl() {
    return this.getStringAttribute('accessibility_error_redirect_url');
  }

  // accessibility_login_redirect_url - computed: true, optional: false, required: false
  public get accessibilityLoginRedirectUrl() {
    return this.getStringAttribute('accessibility_login_redirect_url');
  }

  // accessibility_self_service - computed: true, optional: false, required: false
  public get accessibilitySelfService() {
    return this.getBooleanAttribute('accessibility_self_service') as any;
  }

  // acs_endpoints - computed: true, optional: false, required: false
  public get acsEndpoints() {
    return this.getListAttribute('acs_endpoints');
  }

  // active_only - computed: false, optional: true, required: false
  private _activeOnly?: boolean | cdktf.IResolvable; 
  public get activeOnly() {
    return this.getBooleanAttribute('active_only') as any;
  }
  public set activeOnly(value: boolean | cdktf.IResolvable) {
    this._activeOnly = value;
  }
  public resetActiveOnly() {
    this._activeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyInput() {
    return this._activeOnly;
  }

  // app_settings_json - computed: true, optional: false, required: false
  public get appSettingsJson() {
    return this.getStringAttribute('app_settings_json');
  }

  // assertion_signed - computed: true, optional: false, required: false
  public get assertionSigned() {
    return this.getBooleanAttribute('assertion_signed') as any;
  }

  // attribute_statements - computed: true, optional: false, required: false
  public attributeStatements(index: string) {
    return new DataOktaAppSamlAttributeStatements(this, 'attribute_statements', index);
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // authn_context_class_ref - computed: true, optional: false, required: false
  public get authnContextClassRef() {
    return this.getStringAttribute('authn_context_class_ref');
  }

  // auto_submit_toolbar - computed: true, optional: false, required: false
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar') as any;
  }

  // default_relay_state - computed: true, optional: false, required: false
  public get defaultRelayState() {
    return this.getStringAttribute('default_relay_state');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // digest_algorithm - computed: true, optional: false, required: false
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }

  // features - computed: true, optional: false, required: false
  public get features() {
    return this.getListAttribute('features');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // hide_ios - computed: true, optional: false, required: false
  public get hideIos() {
    return this.getBooleanAttribute('hide_ios') as any;
  }

  // hide_web - computed: true, optional: false, required: false
  public get hideWeb() {
    return this.getBooleanAttribute('hide_web') as any;
  }

  // honor_force_authn - computed: true, optional: false, required: false
  public get honorForceAuthn() {
    return this.getBooleanAttribute('honor_force_authn') as any;
  }

  // id - computed: false, optional: true, required: false
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

  // idp_issuer - computed: true, optional: false, required: false
  public get idpIssuer() {
    return this.getStringAttribute('idp_issuer');
  }

  // inline_hook_id - computed: true, optional: false, required: false
  public get inlineHookId() {
    return this.getStringAttribute('inline_hook_id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // label_prefix - computed: false, optional: true, required: false
  private _labelPrefix?: string; 
  public get labelPrefix() {
    return this.getStringAttribute('label_prefix');
  }
  public set labelPrefix(value: string) {
    this._labelPrefix = value;
  }
  public resetLabelPrefix() {
    this._labelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPrefixInput() {
    return this._labelPrefix;
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recipient - computed: true, optional: false, required: false
  public get recipient() {
    return this.getStringAttribute('recipient');
  }

  // request_compressed - computed: false, optional: true, required: false
  private _requestCompressed?: boolean | cdktf.IResolvable; 
  public get requestCompressed() {
    return this.getBooleanAttribute('request_compressed') as any;
  }
  public set requestCompressed(value: boolean | cdktf.IResolvable) {
    this._requestCompressed = value;
  }
  public resetRequestCompressed() {
    this._requestCompressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCompressedInput() {
    return this._requestCompressed;
  }

  // response_signed - computed: true, optional: false, required: false
  public get responseSigned() {
    return this.getBooleanAttribute('response_signed') as any;
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // single_logout_certificate - computed: true, optional: false, required: false
  public get singleLogoutCertificate() {
    return this.getStringAttribute('single_logout_certificate');
  }

  // single_logout_issuer - computed: true, optional: false, required: false
  public get singleLogoutIssuer() {
    return this.getStringAttribute('single_logout_issuer');
  }

  // single_logout_url - computed: true, optional: false, required: false
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }

  // skip_groups - computed: false, optional: true, required: false
  private _skipGroups?: boolean | cdktf.IResolvable; 
  public get skipGroups() {
    return this.getBooleanAttribute('skip_groups') as any;
  }
  public set skipGroups(value: boolean | cdktf.IResolvable) {
    this._skipGroups = value;
  }
  public resetSkipGroups() {
    this._skipGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGroupsInput() {
    return this._skipGroups;
  }

  // skip_users - computed: false, optional: true, required: false
  private _skipUsers?: boolean | cdktf.IResolvable; 
  public get skipUsers() {
    return this.getBooleanAttribute('skip_users') as any;
  }
  public set skipUsers(value: boolean | cdktf.IResolvable) {
    this._skipUsers = value;
  }
  public resetSkipUsers() {
    this._skipUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUsersInput() {
    return this._skipUsers;
  }

  // sp_issuer - computed: true, optional: false, required: false
  public get spIssuer() {
    return this.getStringAttribute('sp_issuer');
  }

  // sso_url - computed: true, optional: false, required: false
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_name_id_format - computed: true, optional: false, required: false
  public get subjectNameIdFormat() {
    return this.getStringAttribute('subject_name_id_format');
  }

  // subject_name_id_template - computed: true, optional: false, required: false
  public get subjectNameIdTemplate() {
    return this.getStringAttribute('subject_name_id_template');
  }

  // user_name_template - computed: true, optional: false, required: false
  public get userNameTemplate() {
    return this.getStringAttribute('user_name_template');
  }

  // user_name_template_push_status - computed: true, optional: false, required: false
  public get userNameTemplatePushStatus() {
    return this.getStringAttribute('user_name_template_push_status');
  }

  // user_name_template_suffix - computed: true, optional: false, required: false
  public get userNameTemplateSuffix() {
    return this.getStringAttribute('user_name_template_suffix');
  }

  // user_name_template_type - computed: true, optional: false, required: false
  public get userNameTemplateType() {
    return this.getStringAttribute('user_name_template_type');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_only: cdktf.booleanToTerraform(this._activeOnly),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      label_prefix: cdktf.stringToTerraform(this._labelPrefix),
      request_compressed: cdktf.booleanToTerraform(this._requestCompressed),
      skip_groups: cdktf.booleanToTerraform(this._skipGroups),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
    };
  }
}
