
function job_list_seo_url(frm) {

	if(frm.search_type!=null && frm.search_type.value!=0 && frm.search_type.value!='' ) {
        return job_list_seo_url_search_type(frm);
	}

	if(frm.jobId!=null && frm.jobId.value!='' ) {
		return true;
	}

	var url = "";
	var url_pre = "/so/";
	if(frm.keyword!=null && frm.keyword.value!='')	{
		var str = frm.keyword.value;
		str = str.replace(/#/g, "%23");
		str = str.replace(/&/g, "%26");
		str = str.replace(/\//g, "%2f");
		str = str.replace(/\?/g, "%3f");
		str = str.replace(/\'/g, "");
		url_pre += encodeURIComponent(str) + "/";
	}
	else {
		url_pre += "0/";
	}

	if(frm.refreshTime!=null && frm.refreshTime.value!='' && frm.refreshTime.value!='-1')	
		url += frm.refreshTime.value;
	else 
		url += "0";

	if(frm.degree!=null && frm.degree.value!='' && frm.degree.value!='-1')
		url += "-" + frm.degree.value;
	else 
		url += "-0";

	if(frm.degree_check==null || frm.degree_check.checked==false)
		url += "-0";
	else 
		url += "-" + frm.degree_check.value;

	if(frm.company_type!=null && frm.company_type.value!='' && frm.company_type.value!='-1')
		url += "-" + frm.company_type.value;
	else 
		url += "-0";

	if(frm.salary!=null && frm.salary.value!='' && frm.salary.value!='-1')
		url += "-" + frm.salary.value;
	else 
		url += "-0";

	if(frm.work_type!=null && frm.work_type.value!='' && frm.work_type.value!='-1')
		url += "-" + frm.work_type.value;
	else 
		url += "-0";

	if(frm.jobtype!=null && frm.jobtype.value!='' && frm.jobtype.value!='-1')
		url += "-" + frm.jobtype.value;
	else 
		url += "-0";

	if(frm.industry!=null && frm.industry.value!='' && frm.industry.value!='-1')
		url += "-" + frm.industry.value;
	else 
		url += "-0";

	if(frm.work_age!=null && frm.work_age.value!='' && frm.work_age.value!='-1')
		url += "-" + frm.work_age.value;
	else 
		url += "-0";

	if(frm.work_age_supply==null || frm.work_age_supply.checked==false)
		url += "-0";
	else 
		url += "-" + frm.work_age_supply.value;

	if(frm.req_gender!=null && frm.req_gender.value!='' && frm.req_gender.value!='-1')
		url += "-" + frm.req_gender.value;
	else 
		url += "-0";

	if(frm.subway!=null && frm.subway.value!='' && frm.subway.value!='-1')
		url += "-" + frm.subway.value;
	else 
		url += "-0";

	if(frm.getcbds!=null && frm.getcbds.value!='' && frm.getcbds.value!='-1')
		url += "-" + frm.getcbds.value;
	else 
		url += "-0";

	if(frm.city!=null && frm.city.value!='' && frm.city.value!='-1')
		url += "-" + frm.city.value;
	else 
		url += "-0";


	url = url.replace(/;/g, "__");
	url = url.replace(/,/g, "_");

	url = url_pre + url + "/p0";
	//alert(url);
	location.href = url;
	return false;

}

//search_type !=0 即搜索类型不是全文搜索时
function job_list_seo_url_search_type(frm) {

    if(frm.search_type.value == 1 || frm.search_type.value == 2){
        var str = frm.keyword.value;
        str = str.replace(/#/g, "%23");
        str = str.replace(/&/g, "%26");
        str = str.replace(/\//g, "%2f");
        str = str.replace(/\?/g, "%3f");
        var encode_keyword = encodeURIComponent(str);
        
        var url = 'http://' + document.domain + '/modules/jsapply/job_list.php?search_type='+frm.search_type.value+'&flagw=0&keyword=';
        url += encode_keyword;
        location.href = url;
        return false;
    }
    else{
        return true;
    }
    
}