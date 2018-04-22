function FindProxyForURL(a, b) {
	//var c = 'PROXY 114.114.114.114:8888';
	//var d = 'PROXY 8.8.8.8:80';
	var c = 'PROXY 58.221.64.131:15865';


	if (dnsDomainIs(b, "sw.civic.pw") || dnsDomainIs(b, "svip.xjqxz.top") || dnsDomainIs(b, "61.160.194.167") || dnsDomainIs(b, "hz.zbaibu.com") || dnsDomainIs(b, "new.goto1y.com") || dnsDomainIs(b, "localhost") || dnsDomainIs(b, "admin.qqhuikm.com") || dnsDomainIs(b, "fk.ipa-apk.cn") || dnsDomainIs(b, "d.doudouli.cn") || dnsDomainIs(b, "cloud.bmob.cn") || dnsDomainIs(b, "c.zhy360.cn") || dnsDomainIs(b, "check.goto1y.com") || dnsDomainIs(b, "js6k.g1bz.com") || dnsDomainIs(b, "ok.goto1y.com") || dnsDomainIs(b, "l.doudouli.cn") || dnsDomainIs(b, "dd.bllbaby.cn") || dnsDomainIs(b, "wz.hsmytx.com") || dnsDomainIs(b, "api.wzok.club") || dnsDomainIs(b, "hz.zbaibu.com") || dnsDomainIs(b, "api.ds888.top") || dnsDomainIs(b, "1.zhclife.com") || dnsDomainIs(b, "www.amwlkj.com") || dnsDomainIs(b, "cloud.bmob.cn")) {
		return c
	}
	if(dnsDomainIs(b,"xb.brightme.cn")|| dnsDomainIs(b, "verifyweapp.applinzi.com")|| dnsDomainIs(b, "cloud.bmob.cn")||dnsDomainIs(b, "new.goto1y.com")|| dnsDomainIs(b, "api.kfhuihe.net")){
	        return c
		}
	if(dnsDomainIs(b,"c.zhy360.cn")|| dnsDomainIs(b, "fancheng.0535sh.com")){
	        return c
		}

	return 'DIRECT'
}
