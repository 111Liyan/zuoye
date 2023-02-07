import { http,apis  } from "../unlits/http";
export const getAuthor = () => {
	return http({
		url: apis("/sys/permission"),
		method: "get",
	});
};
export const getAuthorsd = (data) => {
	return http({
		url: apis("/sys/permission"),
		method: "post",
		data,
	});
};
export const getAuts = (data) => {
	return http({
		url: apis("/sys/permission/" + data.id),
		method: "put",
		data,
	});
};

/**删除权限 */
export const getAuest = (id) => {
	return http({
		url: apis("/sys/permission/" + id),
		method: "DELETE",
	});
};

