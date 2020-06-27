import * as fromRegion from './region.reducer';
import { selectRegionState } from './region.selectors';

describe('Region Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRegionState({
      [fromRegion.regionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
