export const setWithExpiryLocalStorage = (key, value, ttl) => {
	const now = new Date()
	const item = {
		value: value,
		expiry: now.getTime() + ttl
	}
	localStorage.setItem(key, )
}
