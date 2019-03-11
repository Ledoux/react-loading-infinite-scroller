import React from 'react'
import { shallow } from 'enzyme'

import { RawLoadingInfiniteScroll } from '../index'

describe('RawLoadingInfiniteScroll', () => {
  describe('snapshot', () => {
    it('should match snapshot', () => {
      // given
      const props = {
        query: {},
      }

      // when
      const wrapper = shallow(<RawLoadingInfiniteScroll {...props} />)

      // then
      expect(wrapper).toBeDefined()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
