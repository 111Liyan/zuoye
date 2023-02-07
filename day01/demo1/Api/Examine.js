import { http ,apis } from "../unlits/http";
export const getExamine = (data) => {
	return http({
		url: apis("/user/process/instance/1/10"),
		method: "put",
		data,
	});
};
