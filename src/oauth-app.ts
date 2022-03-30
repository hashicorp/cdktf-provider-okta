// https://www.terraform.io/docs/providers/okta/r/oauth_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom error page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_error_redirect_url OauthApp#accessibility_error_redirect_url}
  */
  readonly accessibilityErrorRedirectUrl?: string;
  /**
  * Custom login page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_login_redirect_url OauthApp#accessibility_login_redirect_url}
  */
  readonly accessibilityLoginRedirectUrl?: string;
  /**
  * Enable self service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_self_service OauthApp#accessibility_self_service}
  */
  readonly accessibilitySelfService?: boolean | cdktf.IResolvable;
  /**
  * Application notes for admins.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#admin_note OauthApp#admin_note}
  */
  readonly adminNote?: string;
  /**
  * Displays specific appLinks for the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#app_links_json OauthApp#app_links_json}
  */
  readonly appLinksJson?: string;
  /**
  * Application settings in JSON format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#app_settings_json OauthApp#app_settings_json}
  */
  readonly appSettingsJson?: string;
  /**
  * Requested key rotation mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#auto_key_rotation OauthApp#auto_key_rotation}
  */
  readonly autoKeyRotation?: boolean | cdktf.IResolvable;
  /**
  * Display auto submit toolbar
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#auto_submit_toolbar OauthApp#auto_submit_toolbar}
  */
  readonly autoSubmitToolbar?: boolean | cdktf.IResolvable;
  /**
  * OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_basic_secret OauthApp#client_basic_secret}
  */
  readonly clientBasicSecret?: string;
  /**
  * OAuth client ID. If set during creation, app is created with this id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_id OauthApp#client_id}
  */
  readonly clientId?: string;
  /**
  * URI to a web page providing information about the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_uri OauthApp#client_uri}
  */
  readonly clientUri?: string;
  /**
  * *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#consent_method OauthApp#consent_method}
  */
  readonly consentMethod?: string;
  /**
  * **Deprecated** This property allows you to set your client_id during creation. NOTE: updating after creation will be a no-op, use client_id for that behavior instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#custom_client_id OauthApp#custom_client_id}
  */
  readonly customClientId?: string;
  /**
  * Application notes for end users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#enduser_note OauthApp#enduser_note}
  */
  readonly enduserNote?: string;
  /**
  * List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#grant_types OauthApp#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * Groups associated with the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#groups OauthApp#groups}
  */
  readonly groups?: string[];
  /**
  * Do not display application icon on mobile app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#hide_ios OauthApp#hide_ios}
  */
  readonly hideIos?: boolean | cdktf.IResolvable;
  /**
  * Do not display application icon to users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#hide_web OauthApp#hide_web}
  */
  readonly hideWeb?: boolean | cdktf.IResolvable;
  /**
  * *Early Access Property*. Enable Federation Broker Mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#implicit_assignment OauthApp#implicit_assignment}
  */
  readonly implicitAssignment?: boolean | cdktf.IResolvable;
  /**
  * *Early Access Property*. Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#issuer_mode OauthApp#issuer_mode}
  */
  readonly issuerMode?: string;
  /**
  * Pretty name of app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#label OauthApp#label}
  */
  readonly label: string;
  /**
  * The type of Idp-Initiated login that the client supports, if any
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_mode OauthApp#login_mode}
  */
  readonly loginMode?: string;
  /**
  * List of scopes to use for the request
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_scopes OauthApp#login_scopes}
  */
  readonly loginScopes?: string[];
  /**
  * URI that initiates login.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_uri OauthApp#login_uri}
  */
  readonly loginUri?: string;
  /**
  * Local path to logo of the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#logo OauthApp#logo}
  */
  readonly logo?: string;
  /**
  * URI that references a logo for the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#logo_uri OauthApp#logo_uri}
  */
  readonly logoUri?: string;
  /**
  * This tells the provider not to persist the application's secret to state. If this is ever changes from true => false your app will be recreated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#omit_secret OauthApp#omit_secret}
  */
  readonly omitSecret?: boolean | cdktf.IResolvable;
  /**
  * URI to web page providing client policy document.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#policy_uri OauthApp#policy_uri}
  */
  readonly policyUri?: string;
  /**
  * List of URIs for redirection after logout
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#post_logout_redirect_uris OauthApp#post_logout_redirect_uris}
  */
  readonly postLogoutRedirectUris?: string[];
  /**
  * Custom JSON that represents an OAuth application's profile
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#profile OauthApp#profile}
  */
  readonly profile?: string;
  /**
  * List of URIs for use in the redirect-based flow. This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#redirect_uris OauthApp#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * *Early Access Property* Grace period for token rotation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#refresh_token_leeway OauthApp#refresh_token_leeway}
  */
  readonly refreshTokenLeeway?: number;
  /**
  * *Early Access Property* Refresh token rotation behavior
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#refresh_token_rotation OauthApp#refresh_token_rotation}
  */
  readonly refreshTokenRotation?: string;
  /**
  * List of OAuth 2.0 response type strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#response_types OauthApp#response_types}
  */
  readonly responseTypes?: string[];
  /**
  * Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#skip_groups OauthApp#skip_groups}
  */
  readonly skipGroups?: boolean | cdktf.IResolvable;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#skip_users OauthApp#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
  /**
  * Status of application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#status OauthApp#status}
  */
  readonly status?: string;
  /**
  * Requested authentication method for the token endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#token_endpoint_auth_method OauthApp#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod?: string;
  /**
  * URI to web page providing client tos (terms of service).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#tos_uri OauthApp#tos_uri}
  */
  readonly tosUri?: string;
  /**
  * The type of client application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#type OauthApp#type}
  */
  readonly type: string;
  /**
  * Username template
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template OauthApp#user_name_template}
  */
  readonly userNameTemplate?: string;
  /**
  * Push username on update
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_push_status OauthApp#user_name_template_push_status}
  */
  readonly userNameTemplatePushStatus?: string;
  /**
  * Username template suffix
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_suffix OauthApp#user_name_template_suffix}
  */
  readonly userNameTemplateSuffix?: string;
  /**
  * Username template type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_type OauthApp#user_name_template_type}
  */
  readonly userNameTemplateType?: string;
  /**
  * *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#wildcard_redirect OauthApp#wildcard_redirect}
  */
  readonly wildcardRedirect?: string;
  /**
  * groups_claim block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#groups_claim OauthApp#groups_claim}
  */
  readonly groupsClaim?: OauthAppGroupsClaim;
  /**
  * jwks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#jwks OauthApp#jwks}
  */
  readonly jwks?: OauthAppJwks[] | cdktf.IResolvable;
  /**
  * users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#users OauthApp#users}
  */
  readonly users?: OauthAppUsers[] | cdktf.IResolvable;
}
export interface OauthAppGroupsClaim {
  /**
  * Groups claim filter. Can only be set if type is FILTER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#filter_type OauthApp#filter_type}
  */
  readonly filterType?: string;
  /**
  * Name of the claim that will be used in the token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#name OauthApp#name}
  */
  readonly name: string;
  /**
  * Groups claim type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#type OauthApp#type}
  */
  readonly type: string;
  /**
  * Value of the claim. Can be an Okta Expression Language statement that evaluates at the time the token is minted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#value OauthApp#value}
  */
  readonly value: string;
}

export function oauthAppGroupsClaimToTerraform(struct?: OauthAppGroupsClaimOutputReference | OauthAppGroupsClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class OauthAppGroupsClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OauthAppGroupsClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthAppGroupsClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface OauthAppJwks {
  /**
  * RSA Exponent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#e OauthApp#e}
  */
  readonly e?: string;
  /**
  * Key ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#kid OauthApp#kid}
  */
  readonly kid: string;
  /**
  * Key type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#kty OauthApp#kty}
  */
  readonly kty: string;
  /**
  * RSA Modulus
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#n OauthApp#n}
  */
  readonly n?: string;
}

export function oauthAppJwksToTerraform(struct?: OauthAppJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    e: cdktf.stringToTerraform(struct!.e),
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
  }
}

export interface OauthAppUsers {
  /**
  * User ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}
  */
  readonly id?: string;
  /**
  * Password for user application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#password OauthApp#password}
  */
  readonly password?: string;
  /**
  * Username for user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#username OauthApp#username}
  */
  readonly username?: string;
}

export function oauthAppUsersToTerraform(struct?: OauthAppUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/oauth_app okta_oauth_app}
*/
export class OauthApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_oauth_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/oauth_app okta_oauth_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthAppConfig
  */
  public constructor(scope: Construct, id: string, config: OauthAppConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_oauth_app',
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
    this._accessibilityErrorRedirectUrl = config.accessibilityErrorRedirectUrl;
    this._accessibilityLoginRedirectUrl = config.accessibilityLoginRedirectUrl;
    this._accessibilitySelfService = config.accessibilitySelfService;
    this._adminNote = config.adminNote;
    this._appLinksJson = config.appLinksJson;
    this._appSettingsJson = config.appSettingsJson;
    this._autoKeyRotation = config.autoKeyRotation;
    this._autoSubmitToolbar = config.autoSubmitToolbar;
    this._clientBasicSecret = config.clientBasicSecret;
    this._clientId = config.clientId;
    this._clientUri = config.clientUri;
    this._consentMethod = config.consentMethod;
    this._customClientId = config.customClientId;
    this._enduserNote = config.enduserNote;
    this._grantTypes = config.grantTypes;
    this._groups = config.groups;
    this._hideIos = config.hideIos;
    this._hideWeb = config.hideWeb;
    this._implicitAssignment = config.implicitAssignment;
    this._issuerMode = config.issuerMode;
    this._label = config.label;
    this._loginMode = config.loginMode;
    this._loginScopes = config.loginScopes;
    this._loginUri = config.loginUri;
    this._logo = config.logo;
    this._logoUri = config.logoUri;
    this._omitSecret = config.omitSecret;
    this._policyUri = config.policyUri;
    this._postLogoutRedirectUris = config.postLogoutRedirectUris;
    this._profile = config.profile;
    this._redirectUris = config.redirectUris;
    this._refreshTokenLeeway = config.refreshTokenLeeway;
    this._refreshTokenRotation = config.refreshTokenRotation;
    this._responseTypes = config.responseTypes;
    this._skipGroups = config.skipGroups;
    this._skipUsers = config.skipUsers;
    this._status = config.status;
    this._tokenEndpointAuthMethod = config.tokenEndpointAuthMethod;
    this._tosUri = config.tosUri;
    this._type = config.type;
    this._userNameTemplate = config.userNameTemplate;
    this._userNameTemplatePushStatus = config.userNameTemplatePushStatus;
    this._userNameTemplateSuffix = config.userNameTemplateSuffix;
    this._userNameTemplateType = config.userNameTemplateType;
    this._wildcardRedirect = config.wildcardRedirect;
    this._groupsClaim.internalValue = config.groupsClaim;
    this._jwks = config.jwks;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessibility_error_redirect_url - computed: false, optional: true, required: false
  private _accessibilityErrorRedirectUrl?: string; 
  public get accessibilityErrorRedirectUrl() {
    return this.getStringAttribute('accessibility_error_redirect_url');
  }
  public set accessibilityErrorRedirectUrl(value: string) {
    this._accessibilityErrorRedirectUrl = value;
  }
  public resetAccessibilityErrorRedirectUrl() {
    this._accessibilityErrorRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityErrorRedirectUrlInput() {
    return this._accessibilityErrorRedirectUrl;
  }

  // accessibility_login_redirect_url - computed: false, optional: true, required: false
  private _accessibilityLoginRedirectUrl?: string; 
  public get accessibilityLoginRedirectUrl() {
    return this.getStringAttribute('accessibility_login_redirect_url');
  }
  public set accessibilityLoginRedirectUrl(value: string) {
    this._accessibilityLoginRedirectUrl = value;
  }
  public resetAccessibilityLoginRedirectUrl() {
    this._accessibilityLoginRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityLoginRedirectUrlInput() {
    return this._accessibilityLoginRedirectUrl;
  }

  // accessibility_self_service - computed: false, optional: true, required: false
  private _accessibilitySelfService?: boolean | cdktf.IResolvable; 
  public get accessibilitySelfService() {
    return this.getBooleanAttribute('accessibility_self_service');
  }
  public set accessibilitySelfService(value: boolean | cdktf.IResolvable) {
    this._accessibilitySelfService = value;
  }
  public resetAccessibilitySelfService() {
    this._accessibilitySelfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilitySelfServiceInput() {
    return this._accessibilitySelfService;
  }

  // admin_note - computed: false, optional: true, required: false
  private _adminNote?: string; 
  public get adminNote() {
    return this.getStringAttribute('admin_note');
  }
  public set adminNote(value: string) {
    this._adminNote = value;
  }
  public resetAdminNote() {
    this._adminNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNoteInput() {
    return this._adminNote;
  }

  // app_links_json - computed: false, optional: true, required: false
  private _appLinksJson?: string; 
  public get appLinksJson() {
    return this.getStringAttribute('app_links_json');
  }
  public set appLinksJson(value: string) {
    this._appLinksJson = value;
  }
  public resetAppLinksJson() {
    this._appLinksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLinksJsonInput() {
    return this._appLinksJson;
  }

  // app_settings_json - computed: false, optional: true, required: false
  private _appSettingsJson?: string; 
  public get appSettingsJson() {
    return this.getStringAttribute('app_settings_json');
  }
  public set appSettingsJson(value: string) {
    this._appSettingsJson = value;
  }
  public resetAppSettingsJson() {
    this._appSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsJsonInput() {
    return this._appSettingsJson;
  }

  // auto_key_rotation - computed: false, optional: true, required: false
  private _autoKeyRotation?: boolean | cdktf.IResolvable; 
  public get autoKeyRotation() {
    return this.getBooleanAttribute('auto_key_rotation');
  }
  public set autoKeyRotation(value: boolean | cdktf.IResolvable) {
    this._autoKeyRotation = value;
  }
  public resetAutoKeyRotation() {
    this._autoKeyRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoKeyRotationInput() {
    return this._autoKeyRotation;
  }

  // auto_submit_toolbar - computed: false, optional: true, required: false
  private _autoSubmitToolbar?: boolean | cdktf.IResolvable; 
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar');
  }
  public set autoSubmitToolbar(value: boolean | cdktf.IResolvable) {
    this._autoSubmitToolbar = value;
  }
  public resetAutoSubmitToolbar() {
    this._autoSubmitToolbar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubmitToolbarInput() {
    return this._autoSubmitToolbar;
  }

  // client_basic_secret - computed: false, optional: true, required: false
  private _clientBasicSecret?: string; 
  public get clientBasicSecret() {
    return this.getStringAttribute('client_basic_secret');
  }
  public set clientBasicSecret(value: string) {
    this._clientBasicSecret = value;
  }
  public resetClientBasicSecret() {
    this._clientBasicSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBasicSecretInput() {
    return this._clientBasicSecret;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_uri - computed: false, optional: true, required: false
  private _clientUri?: string; 
  public get clientUri() {
    return this.getStringAttribute('client_uri');
  }
  public set clientUri(value: string) {
    this._clientUri = value;
  }
  public resetClientUri() {
    this._clientUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUriInput() {
    return this._clientUri;
  }

  // consent_method - computed: false, optional: true, required: false
  private _consentMethod?: string; 
  public get consentMethod() {
    return this.getStringAttribute('consent_method');
  }
  public set consentMethod(value: string) {
    this._consentMethod = value;
  }
  public resetConsentMethod() {
    this._consentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentMethodInput() {
    return this._consentMethod;
  }

  // custom_client_id - computed: false, optional: true, required: false
  private _customClientId?: string; 
  public get customClientId() {
    return this.getStringAttribute('custom_client_id');
  }
  public set customClientId(value: string) {
    this._customClientId = value;
  }
  public resetCustomClientId() {
    this._customClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClientIdInput() {
    return this._customClientId;
  }

  // enduser_note - computed: false, optional: true, required: false
  private _enduserNote?: string; 
  public get enduserNote() {
    return this.getStringAttribute('enduser_note');
  }
  public set enduserNote(value: string) {
    this._enduserNote = value;
  }
  public resetEnduserNote() {
    this._enduserNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enduserNoteInput() {
    return this._enduserNote;
  }

  // grant_types - computed: false, optional: true, required: false
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  public resetGrantTypes() {
    this._grantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // hide_ios - computed: false, optional: true, required: false
  private _hideIos?: boolean | cdktf.IResolvable; 
  public get hideIos() {
    return this.getBooleanAttribute('hide_ios');
  }
  public set hideIos(value: boolean | cdktf.IResolvable) {
    this._hideIos = value;
  }
  public resetHideIos() {
    this._hideIos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIosInput() {
    return this._hideIos;
  }

  // hide_web - computed: false, optional: true, required: false
  private _hideWeb?: boolean | cdktf.IResolvable; 
  public get hideWeb() {
    return this.getBooleanAttribute('hide_web');
  }
  public set hideWeb(value: boolean | cdktf.IResolvable) {
    this._hideWeb = value;
  }
  public resetHideWeb() {
    this._hideWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideWebInput() {
    return this._hideWeb;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // implicit_assignment - computed: false, optional: true, required: false
  private _implicitAssignment?: boolean | cdktf.IResolvable; 
  public get implicitAssignment() {
    return this.getBooleanAttribute('implicit_assignment');
  }
  public set implicitAssignment(value: boolean | cdktf.IResolvable) {
    this._implicitAssignment = value;
  }
  public resetImplicitAssignment() {
    this._implicitAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitAssignmentInput() {
    return this._implicitAssignment;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // login_mode - computed: false, optional: true, required: false
  private _loginMode?: string; 
  public get loginMode() {
    return this.getStringAttribute('login_mode');
  }
  public set loginMode(value: string) {
    this._loginMode = value;
  }
  public resetLoginMode() {
    this._loginMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginModeInput() {
    return this._loginMode;
  }

  // login_scopes - computed: false, optional: true, required: false
  private _loginScopes?: string[]; 
  public get loginScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('login_scopes'));
  }
  public set loginScopes(value: string[]) {
    this._loginScopes = value;
  }
  public resetLoginScopes() {
    this._loginScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginScopesInput() {
    return this._loginScopes;
  }

  // login_uri - computed: false, optional: true, required: false
  private _loginUri?: string; 
  public get loginUri() {
    return this.getStringAttribute('login_uri');
  }
  public set loginUri(value: string) {
    this._loginUri = value;
  }
  public resetLoginUri() {
    this._loginUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUriInput() {
    return this._loginUri;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // logo_uri - computed: false, optional: true, required: false
  private _logoUri?: string; 
  public get logoUri() {
    return this.getStringAttribute('logo_uri');
  }
  public set logoUri(value: string) {
    this._logoUri = value;
  }
  public resetLogoUri() {
    this._logoUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUriInput() {
    return this._logoUri;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // omit_secret - computed: false, optional: true, required: false
  private _omitSecret?: boolean | cdktf.IResolvable; 
  public get omitSecret() {
    return this.getBooleanAttribute('omit_secret');
  }
  public set omitSecret(value: boolean | cdktf.IResolvable) {
    this._omitSecret = value;
  }
  public resetOmitSecret() {
    this._omitSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitSecretInput() {
    return this._omitSecret;
  }

  // policy_uri - computed: false, optional: true, required: false
  private _policyUri?: string; 
  public get policyUri() {
    return this.getStringAttribute('policy_uri');
  }
  public set policyUri(value: string) {
    this._policyUri = value;
  }
  public resetPolicyUri() {
    this._policyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriInput() {
    return this._policyUri;
  }

  // post_logout_redirect_uris - computed: false, optional: true, required: false
  private _postLogoutRedirectUris?: string[]; 
  public get postLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uris'));
  }
  public set postLogoutRedirectUris(value: string[]) {
    this._postLogoutRedirectUris = value;
  }
  public resetPostLogoutRedirectUris() {
    this._postLogoutRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUrisInput() {
    return this._postLogoutRedirectUris;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // refresh_token_leeway - computed: true, optional: true, required: false
  private _refreshTokenLeeway?: number; 
  public get refreshTokenLeeway() {
    return this.getNumberAttribute('refresh_token_leeway');
  }
  public set refreshTokenLeeway(value: number) {
    this._refreshTokenLeeway = value;
  }
  public resetRefreshTokenLeeway() {
    this._refreshTokenLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenLeewayInput() {
    return this._refreshTokenLeeway;
  }

  // refresh_token_rotation - computed: true, optional: true, required: false
  private _refreshTokenRotation?: string; 
  public get refreshTokenRotation() {
    return this.getStringAttribute('refresh_token_rotation');
  }
  public set refreshTokenRotation(value: string) {
    this._refreshTokenRotation = value;
  }
  public resetRefreshTokenRotation() {
    this._refreshTokenRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRotationInput() {
    return this._refreshTokenRotation;
  }

  // response_types - computed: false, optional: true, required: false
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_types'));
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  public resetResponseTypes() {
    this._responseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // sign_on_mode - computed: true, optional: false, required: false
  public get signOnMode() {
    return this.getStringAttribute('sign_on_mode');
  }

  // skip_groups - computed: false, optional: true, required: false
  private _skipGroups?: boolean | cdktf.IResolvable; 
  public get skipGroups() {
    return this.getBooleanAttribute('skip_groups');
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
    return this.getBooleanAttribute('skip_users');
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

  // token_endpoint_auth_method - computed: false, optional: true, required: false
  private _tokenEndpointAuthMethod?: string; 
  public get tokenEndpointAuthMethod() {
    return this.getStringAttribute('token_endpoint_auth_method');
  }
  public set tokenEndpointAuthMethod(value: string) {
    this._tokenEndpointAuthMethod = value;
  }
  public resetTokenEndpointAuthMethod() {
    this._tokenEndpointAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthMethodInput() {
    return this._tokenEndpointAuthMethod;
  }

  // tos_uri - computed: false, optional: true, required: false
  private _tosUri?: string; 
  public get tosUri() {
    return this.getStringAttribute('tos_uri');
  }
  public set tosUri(value: string) {
    this._tosUri = value;
  }
  public resetTosUri() {
    this._tosUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosUriInput() {
    return this._tosUri;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_name_template - computed: false, optional: true, required: false
  private _userNameTemplate?: string; 
  public get userNameTemplate() {
    return this.getStringAttribute('user_name_template');
  }
  public set userNameTemplate(value: string) {
    this._userNameTemplate = value;
  }
  public resetUserNameTemplate() {
    this._userNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateInput() {
    return this._userNameTemplate;
  }

  // user_name_template_push_status - computed: false, optional: true, required: false
  private _userNameTemplatePushStatus?: string; 
  public get userNameTemplatePushStatus() {
    return this.getStringAttribute('user_name_template_push_status');
  }
  public set userNameTemplatePushStatus(value: string) {
    this._userNameTemplatePushStatus = value;
  }
  public resetUserNameTemplatePushStatus() {
    this._userNameTemplatePushStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplatePushStatusInput() {
    return this._userNameTemplatePushStatus;
  }

  // user_name_template_suffix - computed: false, optional: true, required: false
  private _userNameTemplateSuffix?: string; 
  public get userNameTemplateSuffix() {
    return this.getStringAttribute('user_name_template_suffix');
  }
  public set userNameTemplateSuffix(value: string) {
    this._userNameTemplateSuffix = value;
  }
  public resetUserNameTemplateSuffix() {
    this._userNameTemplateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateSuffixInput() {
    return this._userNameTemplateSuffix;
  }

  // user_name_template_type - computed: false, optional: true, required: false
  private _userNameTemplateType?: string; 
  public get userNameTemplateType() {
    return this.getStringAttribute('user_name_template_type');
  }
  public set userNameTemplateType(value: string) {
    this._userNameTemplateType = value;
  }
  public resetUserNameTemplateType() {
    this._userNameTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateTypeInput() {
    return this._userNameTemplateType;
  }

  // wildcard_redirect - computed: false, optional: true, required: false
  private _wildcardRedirect?: string; 
  public get wildcardRedirect() {
    return this.getStringAttribute('wildcard_redirect');
  }
  public set wildcardRedirect(value: string) {
    this._wildcardRedirect = value;
  }
  public resetWildcardRedirect() {
    this._wildcardRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardRedirectInput() {
    return this._wildcardRedirect;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim = new OauthAppGroupsClaimOutputReference(this, "groups_claim");
  public get groupsClaim() {
    return this._groupsClaim;
  }
  public putGroupsClaim(value: OauthAppGroupsClaim) {
    this._groupsClaim.internalValue = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim.internalValue;
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: OauthAppJwks[] | cdktf.IResolvable; 
  public get jwks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('jwks');
  }
  public set jwks(value: OauthAppJwks[] | cdktf.IResolvable) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // users - computed: false, optional: true, required: false
  private _users?: OauthAppUsers[] | cdktf.IResolvable; 
  public get users() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('users')));
  }
  public set users(value: OauthAppUsers[] | cdktf.IResolvable) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessibility_error_redirect_url: cdktf.stringToTerraform(this._accessibilityErrorRedirectUrl),
      accessibility_login_redirect_url: cdktf.stringToTerraform(this._accessibilityLoginRedirectUrl),
      accessibility_self_service: cdktf.booleanToTerraform(this._accessibilitySelfService),
      admin_note: cdktf.stringToTerraform(this._adminNote),
      app_links_json: cdktf.stringToTerraform(this._appLinksJson),
      app_settings_json: cdktf.stringToTerraform(this._appSettingsJson),
      auto_key_rotation: cdktf.booleanToTerraform(this._autoKeyRotation),
      auto_submit_toolbar: cdktf.booleanToTerraform(this._autoSubmitToolbar),
      client_basic_secret: cdktf.stringToTerraform(this._clientBasicSecret),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_uri: cdktf.stringToTerraform(this._clientUri),
      consent_method: cdktf.stringToTerraform(this._consentMethod),
      custom_client_id: cdktf.stringToTerraform(this._customClientId),
      enduser_note: cdktf.stringToTerraform(this._enduserNote),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTypes),
      groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
      hide_ios: cdktf.booleanToTerraform(this._hideIos),
      hide_web: cdktf.booleanToTerraform(this._hideWeb),
      implicit_assignment: cdktf.booleanToTerraform(this._implicitAssignment),
      issuer_mode: cdktf.stringToTerraform(this._issuerMode),
      label: cdktf.stringToTerraform(this._label),
      login_mode: cdktf.stringToTerraform(this._loginMode),
      login_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._loginScopes),
      login_uri: cdktf.stringToTerraform(this._loginUri),
      logo: cdktf.stringToTerraform(this._logo),
      logo_uri: cdktf.stringToTerraform(this._logoUri),
      omit_secret: cdktf.booleanToTerraform(this._omitSecret),
      policy_uri: cdktf.stringToTerraform(this._policyUri),
      post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform)(this._postLogoutRedirectUris),
      profile: cdktf.stringToTerraform(this._profile),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform)(this._redirectUris),
      refresh_token_leeway: cdktf.numberToTerraform(this._refreshTokenLeeway),
      refresh_token_rotation: cdktf.stringToTerraform(this._refreshTokenRotation),
      response_types: cdktf.listMapper(cdktf.stringToTerraform)(this._responseTypes),
      skip_groups: cdktf.booleanToTerraform(this._skipGroups),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
      status: cdktf.stringToTerraform(this._status),
      token_endpoint_auth_method: cdktf.stringToTerraform(this._tokenEndpointAuthMethod),
      tos_uri: cdktf.stringToTerraform(this._tosUri),
      type: cdktf.stringToTerraform(this._type),
      user_name_template: cdktf.stringToTerraform(this._userNameTemplate),
      user_name_template_push_status: cdktf.stringToTerraform(this._userNameTemplatePushStatus),
      user_name_template_suffix: cdktf.stringToTerraform(this._userNameTemplateSuffix),
      user_name_template_type: cdktf.stringToTerraform(this._userNameTemplateType),
      wildcard_redirect: cdktf.stringToTerraform(this._wildcardRedirect),
      groups_claim: oauthAppGroupsClaimToTerraform(this._groupsClaim.internalValue),
      jwks: cdktf.listMapper(oauthAppJwksToTerraform)(this._jwks),
      users: cdktf.listMapper(oauthAppUsersToTerraform)(this._users),
    };
  }
}
