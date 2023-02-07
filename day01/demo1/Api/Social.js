import { http,apis } from "../unlits/http";
export const getSocial=(data)=>{
	return http({
		url: apis("/social_securitys/list"),
		method: "POST",
		data
	});
}
export const getCart =()=>{
	return http({
		url: apis("/sys/city"),
		method: "get",
	});
}
export const getDepartment=()=>{
	return http({
		url: apis("/company/department"),
		method: "get",
	});
}
export const getCity=()=>{
	return http({
		url: apis("/sys/city"),
		method: "get",
	});
}