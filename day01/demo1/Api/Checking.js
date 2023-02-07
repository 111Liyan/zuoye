import { http,apis } from "../unlits/http";
export const getDepartment=()=>{
	return http({
		url: apis("/company/department"),
		method: "get",
	});
}
export const getAttendances=(data)=>{
	return http({
		url:apis("/attendances"),
		method:"get",
		data
	})
}