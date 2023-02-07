import { http ,apis} from "../unlits/http";
export const getSalary=(data)=>{
	return http({
		url: apis("/salarys/list"),
		method: "post",
		data,
	});
}
export const getDepartment=()=>{
	return http({
		url: apis("/company/department"),
		method: "get",
	});
}