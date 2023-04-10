import { jest } from '@jest/globals';

function mockProfiles() {
  const useProfileRecoil = jest.fn((address) => ({ address, name: address, imageUrl: '' }));
  const useProfilesRecoil = jest.fn((addresses) => ({
    profiles: addresses.map((address) => ({ address, name: address, imageUrl: '' })),
    loading: false,
  }));
  jest.mock('@/recoil/profiles/hooks', () => ({ useProfileRecoil, useProfilesRecoil }));
}

export default mockProfiles;
