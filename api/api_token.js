var gmClient = function(app_id, secret, env) {
    this.app_id = app_id;
    this.secret = secret;
    if (env == undefined){
        this.env = "production";
    } else {
        this.env = env;
    }
};

gmClient.prototype = {
    generateToken: function(params, app_id, secret){
        params = JSON.stringify(params);
        var token = sha1(params + app_id + secret);
        var encrypted = CryptoJS.HmacSHA1("", token);
        return CryptoJS.enc.Base64.stringify(encrypted);
    },

    queryAjax: function(establishment_url, token, app_id, params, method, callback_success, callback_error){
        params.token = token;
        params.app_id = app_id;
        $.ajax({
            url: establishment_url,
            method: method,
            data: params,
            dataType: 'json'
        }).success(function(data){
            callback_success(data);
        }).error(function(data){
            callback_error(data);
        });
    },

    callFunction: function(method, establishment_url, params, callback_success, callback_error) {
        var self = this;
        var clone_p = $.extend(true, {}, params);
        var token = self.generateToken(clone_p, self.app_id, self.secret);
        self.queryAjax(establishment_url, token, self.app_id, clone_p, method, callback_success, callback_error);
    },

    get: function(establishment_url, params, callback_success, callback_error) {
        this.callFunction('GET', establishment_url, params, callback_success, callback_error);
    },

    post: function(establishment_url, params, callback_success, callback_error) {
        this.callFunction('POST', establishment_url, params, callback_success, callback_error);
    },

    patch: function(establishment_url, params, callback_success, callback_error) {
        this.callFunction('PATCH', establishment_url, params, callback_success, callback_error);
    },

    delete: function(establishment_url, params, callback_success, callback_error) {
        this.callFunction('DELETE', establishment_url, params, callback_success, callback_error);
    }
};
