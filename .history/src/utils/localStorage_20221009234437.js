export const setWithExpiryLocalStorage = (key, value, ttl) => {
	const now = new Date()
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

export const getWithExpiryLocalStorage = (key) => {
	const itemStr = localStorage.getItem(key)
	if(!itemStr){
		return null
	}
}