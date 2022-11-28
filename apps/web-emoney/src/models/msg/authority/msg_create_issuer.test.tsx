import MsgCreateIssuer from '@/models/msg/authority/msg_create_issuer';

// ==================================
// unit tests
// ==================================
describe('model: MsgCreateIssuer', () => {
  it('test data result', () => {
    const result = MsgCreateIssuer.fromJson({
      '@type': 'a random type',
      authority: 'emoney132432543',
      issuer: 'emoney134242451',
      denominations: ['btc', 'ngm', 'ejpy'],
    });

    expect(result.authority).toBe('emoney132432543');
    expect(result.issuer).toBe('emoney134242451');
    expect(result.issuer).not.toBe('desmos3322123');
    expect(result.denominations).toHaveLength(3);
    expect(result.denominations).toContain('ngm');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
