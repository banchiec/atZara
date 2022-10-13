// eslint-disable-next-line import/no-anonymous-default-export
export default {
	get: jest.fn().mockImplementationOnce(() => Promise.resolve({ data: [{}] })),
	// get:  jest.fn().mockResolvedValue({data: {}})
}
