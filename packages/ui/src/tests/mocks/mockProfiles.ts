import { jest } from '@jest/globals';

function mockProfiles() {
  const useProfileRecoil = jest.fn((address) => ({ address, name: address, imageUrl: '' }));
  const useProfilesRecoil = jest.fn((address) => ({ address, name: address, imageUrl: '' }));
  jest.mock('@/recoil/profiles/hooks', () => ({ useProfileRecoil, useProfilesRecoil }));
}

export default mockProfiles;
