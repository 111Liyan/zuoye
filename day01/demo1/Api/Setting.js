import { http, apis } from "../unlits/http";
/**获取设置表格内容 */
export const setGet = (params) => {
	return http({
		url: apis("/sys/role"),
		method: "get",
		params,
	});
};
/**获取设置公司信息内容 */
export const settitleGet = () => {
	return http({
		url: apis("/company/1"),
		method: "get",
	});
};

/**添加新增角色 */
export const addrolePost = (data) => {
	return http({
		url: apis("/sys/role"),
		method: "post",
		data,
	});
};

/**删除新增角色 */
export const delroleDelete = (id) => {
	return http({
		url: apis("/sys/role/" + id),
		method: "DELETE",
	});
};

/**删除新增角色 */
export const editrolePut = (data) => {
	return http({
		url: apis("/sys/role/" + data.id),
		method: "put",
		data,
	});
};

/**分配权限 */
export const apportionroleGet = () => {
	return http({
		url: apis("/sys/permission"),
		method: "get",
	});
};

// 获取用户权限
export const getUserRole = (id) => {
	return http({
		url: apis("/sys/role/" + id),
		method: "get",
	});
};

// 分配权限
export const getAssignPrem = (data) => {
	return http({
		url: apis("/sys/role/assignPrem"),
		method: "put",
		data,
	});
};
