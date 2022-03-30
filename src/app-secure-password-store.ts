// https://www.terraform.io/docs/providers/okta/r/app_secure_password_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppSecurePasswordStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom error page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#accessibility_error_redirect_url AppSecurePasswordStore#accessibility_error_redirect_url}
  */
  readonly accessibilityErrorRedirectUrl?: string;
  /**
  * Custom login page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#accessibility_login_redirect_url AppSecurePasswordStore#accessibility_login_redirect_url}
  */
  readonly accessibilityLoginRedirectUrl?: string;
  /**
  * Enable self service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#accessibility_self_service AppSecurePasswordStore#accessibility_self_service}
  */
  readonly accessibilitySelfService?: boolean | cdktf.IResolvable;
  /**
  * Application notes for admins.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#admin_note AppSecurePasswordStore#admin_note}
  */
  readonly adminNote?: string;
  /**
  * Displays specific appLinks for the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#app_links_json AppSecurePasswordStore#app_links_json}
  */
  readonly appLinksJson?: string;
  /**
  * Display auto submit toolbar
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#auto_submit_toolbar AppSecurePasswordStore#auto_submit_toolbar}
  */
  readonly autoSubmitToolbar?: boolean | cdktf.IResolvable;
  /**
  * Application credentials scheme
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#credentials_scheme AppSecurePasswordStore#credentials_scheme}
  */
  readonly credentialsScheme?: string;
  /**
  * Application notes for end users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#enduser_note AppSecurePasswordStore#enduser_note}
  */
  readonly enduserNote?: string;
  /**
  * Groups associated with the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#groups AppSecurePasswordStore#groups}
  */
  readonly groups?: string[];
  /**
  * Do not display application icon on mobile app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#hide_ios AppSecurePasswordStore#hide_ios}
  */
  readonly hideIos?: boolean | cdktf.IResolvable;
  /**
  * Do not display application icon to users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#hide_web AppSecurePasswordStore#hide_web}
  */
  readonly hideWeb?: boolean | cdktf.IResolvable;
  /**
  * Pretty name of app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#label AppSecurePasswordStore#label}
  */
  readonly label: string;
  /**
  * Local path to logo of the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#logo AppSecurePasswordStore#logo}
  */
  readonly logo?: string;
  /**
  * Name of optional param in the login form
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field1 AppSecurePasswordStore#optional_field1}
  */
  readonly optionalField1?: string;
  /**
  * Name of optional value in login form
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field1_value AppSecurePasswordStore#optional_field1_value}
  */
  readonly optionalField1Value?: string;
  /**
  * Name of optional param in the login form
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field2 AppSecurePasswordStore#optional_field2}
  */
  readonly optionalField2?: string;
  /**
  * Name of optional value in login form
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field2_value AppSecurePasswordStore#optional_field2_value}
  */
  readonly optionalField2Value?: string;
  /**
  * Name of optional param in the login form
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field3 AppSecurePasswordStore#optional_field3}
  */
  readonly optionalField3?: string;
  /**
  * Name of optional value in login form
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#optional_field3_value AppSecurePasswordStore#optional_field3_value}
  */
  readonly optionalField3Value?: string;
  /**
  * Login password field
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#password_field AppSecurePasswordStore#password_field}
  */
  readonly passwordField: string;
  /**
  * Allow user to reveal password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#reveal_password AppSecurePasswordStore#reveal_password}
  */
  readonly revealPassword?: boolean | cdktf.IResolvable;
  /**
  * Shared password, required for certain schemes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#shared_password AppSecurePasswordStore#shared_password}
  */
  readonly sharedPassword?: string;
  /**
  * Shared username, required for certain schemes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#shared_username AppSecurePasswordStore#shared_username}
  */
  readonly sharedUsername?: string;
  /**
  * Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#skip_groups AppSecurePasswordStore#skip_groups}
  */
  readonly skipGroups?: boolean | cdktf.IResolvable;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#skip_users AppSecurePasswordStore#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
  /**
  * Status of application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#status AppSecurePasswordStore#status}
  */
  readonly status?: string;
  /**
  * Login URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#url AppSecurePasswordStore#url}
  */
  readonly url: string;
  /**
  * Username template
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#user_name_template AppSecurePasswordStore#user_name_template}
  */
  readonly userNameTemplate?: string;
  /**
  * Push username on update
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#user_name_template_push_status AppSecurePasswordStore#user_name_template_push_status}
  */
  readonly userNameTemplatePushStatus?: string;
  /**
  * Username template suffix
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#user_name_template_suffix AppSecurePasswordStore#user_name_template_suffix}
  */
  readonly userNameTemplateSuffix?: string;
  /**
  * Username template type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#user_name_template_type AppSecurePasswordStore#user_name_template_type}
  */
  readonly userNameTemplateType?: string;
  /**
  * Login username field
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#username_field AppSecurePasswordStore#username_field}
  */
  readonly usernameField: string;
  /**
  * users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#users AppSecurePasswordStore#users}
  */
  readonly users?: AppSecurePasswordStoreUsers[] | cdktf.IResolvable;
}
export interface AppSecurePasswordStoreUsers {
  /**
  * User ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#id AppSecurePasswordStore#id}
  */
  readonly id?: string;
  /**
  * Password for user application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#password AppSecurePasswordStore#password}
  */
  readonly password?: string;
  /**
  * Username for user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store#username AppSecurePasswordStore#username}
  */
  readonly username?: string;
}

export function appSecurePasswordStoreUsersToTerraform(struct?: AppSecurePasswordStoreUsers | cdktf.IResolvable): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store okta_app_secure_password_store}
*/
export class AppSecurePasswordStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_secure_password_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/app_secure_password_store okta_app_secure_password_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppSecurePasswordStoreConfig
  */
  public constructor(scope: Construct, id: string, config: AppSecurePasswordStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_secure_password_store',
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
    this._autoSubmitToolbar = config.autoSubmitToolbar;
    this._credentialsScheme = config.credentialsScheme;
    this._enduserNote = config.enduserNote;
    this._groups = config.groups;
    this._hideIos = config.hideIos;
    this._hideWeb = config.hideWeb;
    this._label = config.label;
    this._logo = config.logo;
    this._optionalField1 = config.optionalField1;
    this._optionalField1Value = config.optionalField1Value;
    this._optionalField2 = config.optionalField2;
    this._optionalField2Value = config.optionalField2Value;
    this._optionalField3 = config.optionalField3;
    this._optionalField3Value = config.optionalField3Value;
    this._passwordField = config.passwordField;
    this._revealPassword = config.revealPassword;
    this._sharedPassword = config.sharedPassword;
    this._sharedUsername = config.sharedUsername;
    this._skipGroups = config.skipGroups;
    this._skipUsers = config.skipUsers;
    this._status = config.status;
    this._url = config.url;
    this._userNameTemplate = config.userNameTemplate;
    this._userNameTemplatePushStatus = config.userNameTemplatePushStatus;
    this._userNameTemplateSuffix = config.userNameTemplateSuffix;
    this._userNameTemplateType = config.userNameTemplateType;
    this._usernameField = config.usernameField;
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

  // credentials_scheme - computed: false, optional: true, required: false
  private _credentialsScheme?: string; 
  public get credentialsScheme() {
    return this.getStringAttribute('credentials_scheme');
  }
  public set credentialsScheme(value: string) {
    this._credentialsScheme = value;
  }
  public resetCredentialsScheme() {
    this._credentialsScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSchemeInput() {
    return this._credentialsScheme;
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

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional_field1 - computed: false, optional: true, required: false
  private _optionalField1?: string; 
  public get optionalField1() {
    return this.getStringAttribute('optional_field1');
  }
  public set optionalField1(value: string) {
    this._optionalField1 = value;
  }
  public resetOptionalField1() {
    this._optionalField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField1Input() {
    return this._optionalField1;
  }

  // optional_field1_value - computed: false, optional: true, required: false
  private _optionalField1Value?: string; 
  public get optionalField1Value() {
    return this.getStringAttribute('optional_field1_value');
  }
  public set optionalField1Value(value: string) {
    this._optionalField1Value = value;
  }
  public resetOptionalField1Value() {
    this._optionalField1Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField1ValueInput() {
    return this._optionalField1Value;
  }

  // optional_field2 - computed: false, optional: true, required: false
  private _optionalField2?: string; 
  public get optionalField2() {
    return this.getStringAttribute('optional_field2');
  }
  public set optionalField2(value: string) {
    this._optionalField2 = value;
  }
  public resetOptionalField2() {
    this._optionalField2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField2Input() {
    return this._optionalField2;
  }

  // optional_field2_value - computed: false, optional: true, required: false
  private _optionalField2Value?: string; 
  public get optionalField2Value() {
    return this.getStringAttribute('optional_field2_value');
  }
  public set optionalField2Value(value: string) {
    this._optionalField2Value = value;
  }
  public resetOptionalField2Value() {
    this._optionalField2Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField2ValueInput() {
    return this._optionalField2Value;
  }

  // optional_field3 - computed: false, optional: true, required: false
  private _optionalField3?: string; 
  public get optionalField3() {
    return this.getStringAttribute('optional_field3');
  }
  public set optionalField3(value: string) {
    this._optionalField3 = value;
  }
  public resetOptionalField3() {
    this._optionalField3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField3Input() {
    return this._optionalField3;
  }

  // optional_field3_value - computed: false, optional: true, required: false
  private _optionalField3Value?: string; 
  public get optionalField3Value() {
    return this.getStringAttribute('optional_field3_value');
  }
  public set optionalField3Value(value: string) {
    this._optionalField3Value = value;
  }
  public resetOptionalField3Value() {
    this._optionalField3Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField3ValueInput() {
    return this._optionalField3Value;
  }

  // password_field - computed: false, optional: false, required: true
  private _passwordField?: string; 
  public get passwordField() {
    return this.getStringAttribute('password_field');
  }
  public set passwordField(value: string) {
    this._passwordField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField;
  }

  // reveal_password - computed: false, optional: true, required: false
  private _revealPassword?: boolean | cdktf.IResolvable; 
  public get revealPassword() {
    return this.getBooleanAttribute('reveal_password');
  }
  public set revealPassword(value: boolean | cdktf.IResolvable) {
    this._revealPassword = value;
  }
  public resetRevealPassword() {
    this._revealPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revealPasswordInput() {
    return this._revealPassword;
  }

  // shared_password - computed: false, optional: true, required: false
  private _sharedPassword?: string; 
  public get sharedPassword() {
    return this.getStringAttribute('shared_password');
  }
  public set sharedPassword(value: string) {
    this._sharedPassword = value;
  }
  public resetSharedPassword() {
    this._sharedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPasswordInput() {
    return this._sharedPassword;
  }

  // shared_username - computed: false, optional: true, required: false
  private _sharedUsername?: string; 
  public get sharedUsername() {
    return this.getStringAttribute('shared_username');
  }
  public set sharedUsername(value: string) {
    this._sharedUsername = value;
  }
  public resetSharedUsername() {
    this._sharedUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedUsernameInput() {
    return this._sharedUsername;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // username_field - computed: false, optional: false, required: true
  private _usernameField?: string; 
  public get usernameField() {
    return this.getStringAttribute('username_field');
  }
  public set usernameField(value: string) {
    this._usernameField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField;
  }

  // users - computed: false, optional: true, required: false
  private _users?: AppSecurePasswordStoreUsers[] | cdktf.IResolvable; 
  public get users() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('users')));
  }
  public set users(value: AppSecurePasswordStoreUsers[] | cdktf.IResolvable) {
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
      auto_submit_toolbar: cdktf.booleanToTerraform(this._autoSubmitToolbar),
      credentials_scheme: cdktf.stringToTerraform(this._credentialsScheme),
      enduser_note: cdktf.stringToTerraform(this._enduserNote),
      groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
      hide_ios: cdktf.booleanToTerraform(this._hideIos),
      hide_web: cdktf.booleanToTerraform(this._hideWeb),
      label: cdktf.stringToTerraform(this._label),
      logo: cdktf.stringToTerraform(this._logo),
      optional_field1: cdktf.stringToTerraform(this._optionalField1),
      optional_field1_value: cdktf.stringToTerraform(this._optionalField1Value),
      optional_field2: cdktf.stringToTerraform(this._optionalField2),
      optional_field2_value: cdktf.stringToTerraform(this._optionalField2Value),
      optional_field3: cdktf.stringToTerraform(this._optionalField3),
      optional_field3_value: cdktf.stringToTerraform(this._optionalField3Value),
      password_field: cdktf.stringToTerraform(this._passwordField),
      reveal_password: cdktf.booleanToTerraform(this._revealPassword),
      shared_password: cdktf.stringToTerraform(this._sharedPassword),
      shared_username: cdktf.stringToTerraform(this._sharedUsername),
      skip_groups: cdktf.booleanToTerraform(this._skipGroups),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
      status: cdktf.stringToTerraform(this._status),
      url: cdktf.stringToTerraform(this._url),
      user_name_template: cdktf.stringToTerraform(this._userNameTemplate),
      user_name_template_push_status: cdktf.stringToTerraform(this._userNameTemplatePushStatus),
      user_name_template_suffix: cdktf.stringToTerraform(this._userNameTemplateSuffix),
      user_name_template_type: cdktf.stringToTerraform(this._userNameTemplateType),
      username_field: cdktf.stringToTerraform(this._usernameField),
      users: cdktf.listMapper(appSecurePasswordStoreUsersToTerraform)(this._users),
    };
  }
}
