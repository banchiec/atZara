// eslint-disable-next-line import/no-anonymous-default-export
export default {
	get: jest.fn().mockImplementation(() => Promise.resolve()
	// get:  jest.fn().mockResolvedValue({data: {}})
}
