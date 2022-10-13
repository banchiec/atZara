// eslint-disable-next-line import/no-anonymous-default-export
{
	get: jest.fn(() => Promise.resolve({ data: {} })),
}

export { mockAxios }
