// eslint-disable-next-line import/no-anonymous-default-export
export default const mockAxios = () => {
	get: jest.fn(() => Promise.resolve({data: {}})),
}