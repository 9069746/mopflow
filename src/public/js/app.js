var noresult = '<div class="none"><i class="i i-none"></i><div>无数据</div></div>';
var host = '',
    token = localStorage.token ? localStorage.token : '',
    api = {},
    request = function (url, data = {}, type = "GET") {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: type,
                url: host + api[url],
                data: data,
                dataType: "json",
                success: function (res) {
                    resolve(res)
                }
            });
        });
    },
    getUrlParam = function (name) {
        var old_url = window.location.search;
        var new_url = encodeURI(old_url);
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = new_url.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    },
    getCookie = function (name) {
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    escape2Html = function (str) {
        var arrEntities = {
            'lt': '<',
            'gt': '>',
            'nbsp': ' ',
            'amp': '&',
            'quot': '"'
        };
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
            return arrEntities[t];
        });
    },
    checkPhone = function (phone) {
        if (!(/^1[345789]\d{9}$/.test(phone))) {
            return false;
        } else {
            return true;
        }
    };