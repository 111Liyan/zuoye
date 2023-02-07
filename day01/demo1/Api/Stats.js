import { http, apis } from "../unlits/http";
/**获取员工内容 */
export const staffGet = (params) => {
	return http({
		url: apis("/sys/user"),
		method: "get",
		params,
	});
};

/**获取当前员工内容 */
export const staffIdGet = (id) => {
	return http({
		url: apis("/sys/user/"+id),
		method: "get",
	});
};
// 权限列表

export const getRole = () => {
	return http({
		url: apis("/sys/role"),
		method: "get",
	});
};

// 获取员工权限
export const getUserRole = (id) => {
	return http({
		url: apis("sys/user/" + id),
		method: "get",
	});
};

// 分配权限
export const getAssignRoles = (data) => {
	return http({
		url: apis("/sys/user/assignRoles"),
		method: "put",
		data,
	});
};
