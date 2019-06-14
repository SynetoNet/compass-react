# 0.5.1 (2019-06-14)

### Documentation Changes

*  fix documentation after export updates ([9f1e477f](https://github.com/SynetoNet/compass-react/commit/9f1e477ff43c87e807d22d3246950995714755a3))

# 0.5.0 (2019-06-13)

### Build System / Dependencies

* export individual components ([8a298ebe](https://github.com/SynetoNet/compass-react/commit/8a298ebede21ac1c964b13b18c180038dd8c1a3d))
* bundle together in index only: Layout (Container, Col, Row), Badge, Button, Dropdown
* export as separate bundles: DatePicker, Form, Modal, Tabs

### Documentation Changes

* **Form:**  add validation feedback examples (fixes [#17](https://github.com/SynetoNet/compass-react/pull/17)) ([9c8cfd85](https://github.com/SynetoNet/compass-react/commit/9c8cfd855484f5ff7b489417e8d2a943d32f59a5))

# 0.4.3 (2019-06-12)

### Bug Fixes

- **Tabs:** remove Fade transition by default (didn't work when integrated in Central, couldn't pinpoint the actual problem) ([086c6d07](https://github.com/SynetoNet/compass-react/commit/086c6d0788adbf1bdc6fea6745bc02b20940d98b))

# 0.4.2 (2019-06-10)

### Documentation Changes

- **Button:** add button types examples ([61400b23](https://github.com/SynetoNet/compass-react/commit/61400b23823d4fcef8fbc6e37e785026fcad36a8))

# 0.4.1 (2019-06-10)

### Bug Fixes

- **DatePicker:** always render as appended to body when customInput passed ([5b2af60a](https://github.com/SynetoNet/compass-react/commit/5b2af60a60eba067f2b504e5f87dc97154f05be4))

# 0.4.0 (2019-06-07)

### New Features

- **Base:** add Typography ([d17993b0](https://github.com/SynetoNet/compass-react/commit/d17993b0ea56bdc389f28d165282a5beb7da6c35))
- **Dropdown:** add Dropdown component ([feddbe80](https://github.com/SynetoNet/compass-react/commit/feddbe80777edc04dbb76eb353746670ad0964a7))
- **Form:**
  - add Form components
  - add ComboBox
  - add Switch
- **Button:**
  - add ripple effect (fixes [#11](https://github.com/SynetoNet/compass-react/pull/11)) ([29b97674](https://github.com/SynetoNet/compass-react/commit/29b97674840553db39cbef5ce6f57d83b597a5dc))
  - add warning & info colors ([437ce245](https://github.com/SynetoNet/compass-react/commit/437ce24578e33881b1c46139225e8b1f65feddc2))
  - add loading state ([0e6726a9](https://github.com/SynetoNet/compass-react/commit/0e6726a9f3b183d9ce45fc9a98d2f02411939bf8))
- **Modal:**
  - add shadow to indicate scroll (fixes [#12](https://github.com/SynetoNet/compass-react/pull/12)) ([f69624ec](https://github.com/SynetoNet/compass-react/commit/f69624ecc2cbf2273c7950a9559c106e158a4d24))
  - add support for stacked modals (fixes [#8](https://github.com/SynetoNet/compass-react/pull/8)) ([8d2444c4](https://github.com/SynetoNet/compass-react/commit/8d2444c4b0866d9025c9c2feee4507d5b27c391b))
- **Dropdown:** add alignRight prop ([e0493b1d](https://github.com/SynetoNet/compass-react/commit/e0493b1d4b87f823cd7f3723e095f687acd8b9ac))

### Bug Fixes

- **DatePicker:**
  - filter out disabled years ([2081001a](https://github.com/SynetoNet/compass-react/commit/2081001a7f532dcf33d9792229bcf9ce51cb6603))
  - set Mon first day of the week ([bb1b84a5](https://github.com/SynetoNet/compass-react/commit/bb1b84a5e9255e2be7e0b6818b65777511ba76a2))
- **Tabs:** prevent switching to a non-existing Tab ([8ae6f36b](https://github.com/SynetoNet/compass-react/commit/8ae6f36be82c95a26f2ad95ad3beffd98b92b139))
- **Tabs:** fix vertical active tab border ([a5a314f6](https://github.com/SynetoNet/compass-react/commit/a5a314f6b086db70a7cce5c3d3073219bd1b5544))

### Documentation Changes

- **Modal:**
  - add example for non-dismissible Modal ([0cf2aa9f](https://github.com/SynetoNet/compass-react/commit/0cf2aa9fee8deb207faa1cf11eafdf6163f7007a))
  - add examples for various sizes (fixes [#6](https://github.com/SynetoNet/compass-react/pull/6)) ([bde9152e](https://github.com/SynetoNet/compass-react/commit/bde9152eafc017ce8b2376950107c8baea903d08))
- **DatePicker:** add timeIntervals example ([c9aca033](https://github.com/SynetoNet/compass-react/commit/c9aca033a4bfeca58b5b5d4bce62ea53179807bf))
- **Tabs:** add example for controlled Tabs ([c8bd6c3a](https://github.com/SynetoNet/compass-react/commit/c8bd6c3a039cae3cef004b5c4a4a30c77333d46e))

# 0.3.3 (2019-05-27)

### Bug Fixes

- **Modal:** adjust action buttons spacing & padding ([b82dc865](https://github.com/SynetoNet/compass-react/commit/b82dc86570c576afbdab1849446a7ab6a23603c4))

# 0.3.2 (2019-05-27)

### Documentation Changes

- **Button:** add spacing between examples ([5e201119](https://github.com/SynetoNet/compass-react/commit/5e20111950308e978b5e3cd5100898d6f97d3303))
- **Badge:** add spacing between examples ([b90e3a9b](https://github.com/SynetoNet/compass-react/commit/b90e3a9b38f0e9873cbf43acc003e3e0c1654298))

# 0.3.1 (2019-05-27)

### New Features

- **Base:** include local fonts ([a0e8f351](https://github.com/SynetoNet/compass-react/commit/a0e8f3512668e86590cf7232d2608d78c3da32cf))

### Bug Fixes

- **Modal:** adjust styling to match design ([0b7e32ba](https://github.com/SynetoNet/compass-react/commit/0b7e32baa76efab1d5fbaf0be4d18b090d417f3f))
- **Button:** remove padding for tertiary & link variations ([7c127e14](https://github.com/SynetoNet/compass-react/commit/7c127e14cf746d58e89cca4ec516a0ad0405f38a))

# 0.3.0 (2019-05-27)

### New Features

- **Modal:** add Modal component
- **Button:** add Button component
- **DatePicker:** add DatePicker component
- **Base:** override bootstrap color variables ([be66ac22](https://github.com/SynetoNet/compass-react/commit/be66ac22a96aeca56d4a1af8f811d51a5c767ece))

### Bug Fixes

- **Tabs:**
  - make border stretch as far as content height for vertical tabs ([#4](https://github.com/SynetoNet/compass-react/pull/4)) ([d38d3e68](https://github.com/SynetoNet/compass-react/commit/d38d3e68855ea36007ac32708c7d95e5cc4d0161))

### Documentation Changes

- **Base:** add Spacing examples ([b26b3a6a](https://github.com/SynetoNet/compass-react/commit/b26b3a6aabd98f7bc024e8832a3b8e5c5de1cb86))

# 0.2.0 (2019-05-14)

### Documentation Changes

- show props by default ([fc6ab16a](https://github.com/SynetoNet/compass-react/commit/fc6ab16ae07bbbfad4bcc613571719e41ef0b6b6))

### New Features

- **Tabs:**
  - add extra content prop ([c3c37149](https://github.com/SynetoNet/compass-react/commit/c3c3714975ca1b9e264cf46d43a5ce27de1872f6))
  - add right align option ([3b1e13dd](https://github.com/SynetoNet/compass-react/commit/3b1e13dd927f133a86268879144e3f3f4bd59393))
  - use relative font-size ([a5b0392d](https://github.com/SynetoNet/compass-react/commit/a5b0392d32826e8d556849e35af4b9cdf9d61df6))

# 0.1.4 (2019-05-10)

# 0.1.1 (2019-05-10)

### Breaking Changes

- **Badge:**
  - rename primary option [breaking](<[ce055720](https://github.com/SynetoNet/compass-react/commit/ce055720bd4b09a734f072e163944c44a6f9e6e1)>)
  - rename secondary option [breaking](<[3f7b3e4a](https://github.com/SynetoNet/compass-react/commit/3f7b3e4ae4e97f07bacd6810794a1eeee4d95915)>)
  - rename size prop [breaking](<[e4a05da3](https://github.com/SynetoNet/compass-react/commit/e4a05da3ab888dcaff16d8545962ddbeb3a9cd19)>)

### Documentation Changes

- **Base:** include docs for colors and layout ([3bc27cbf](https://github.com/SynetoNet/compass-react/commit/3bc27cbfdb9f21aadb47f92d9948346018f9a640))

### New Features

- **Tabs:** add Tabs component ([13c81432](https://github.com/SynetoNet/compass-react/commit/13c81432476d8e788cb3789a877c6e833893f101))
- **Base:** Re-export Grid components ([0cf01349](https://github.com/SynetoNet/compass-react/commit/0cf013492d4a844449c4408aa71e35ad68b6b7b3))
- **Badge:** add badge component ([e4d31523](https://github.com/SynetoNet/compass-react/commit/e4d31523e0e7b17725362d390f86fa608b77f21d))
