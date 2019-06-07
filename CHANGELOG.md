#### 0.4.0 (2019-06-07)

##### Documentation Changes

* **Form:**  remove duplicate docs ([b571716a](https://github.com/SynetoNet/compass-react/commit/b571716a84bf1b28ccdf34edf24cf7c3adaad5fa))
* **Switch:**  update docs ([3b425f75](https://github.com/SynetoNet/compass-react/commit/3b425f75c712d3c08b06a1282ae683c880adb39e))
* **ComboBox:**  update docs ([dc6b56af](https://github.com/SynetoNet/compass-react/commit/dc6b56af410d78eb6318e5f4b4b48f982d0a2d6e))
* **Control:**  change visible docs name for Inputs ([1ff8b081](https://github.com/SynetoNet/compass-react/commit/1ff8b0818e98995ae2aef1d185bf6487ead94e3d))
* **Check:**  update docs to include more examples ([bbc0690f](https://github.com/SynetoNet/compass-react/commit/bbc0690f5ae20ee7515dc5d21bf25c8cbf74eb6f))
* **Dropdown:**  small docs updates ([b4e4835a](https://github.com/SynetoNet/compass-react/commit/b4e4835adbcc2b5d875c4d01a00cab8942c4ca50))
* **Modal:**
  *  non-dismissible Modal example ([0cf2aa9f](https://github.com/SynetoNet/compass-react/commit/0cf2aa9fee8deb207faa1cf11eafdf6163f7007a))
  *  simplify extended example ([9f1feee5](https://github.com/SynetoNet/compass-react/commit/9f1feee57b5c084880e6e1272159fca9986beb94))
  *  add examples for various sizes (fixes [#6](https://github.com/SynetoNet/compass-react/pull/6)) ([bde9152e](https://github.com/SynetoNet/compass-react/commit/bde9152eafc017ce8b2376950107c8baea903d08))
* **DatePicker:**  include timeIntervals in the docs ([c9aca033](https://github.com/SynetoNet/compass-react/commit/c9aca033a4bfeca58b5b5d4bce62ea53179807bf))
*  add font handling documentation ([11adcc1c](https://github.com/SynetoNet/compass-react/commit/11adcc1ce13d668aa03910408af7908f50cf0115))
*  hide code by default ([c370920b](https://github.com/SynetoNet/compass-react/commit/c370920be2a0462802ecbe82c370bdb5feb3b2ea))
* **Tabs:**  add example for controlled Tabs ([c8bd6c3a](https://github.com/SynetoNet/compass-react/commit/c8bd6c3a039cae3cef004b5c4a4a30c77333d46e))

##### New Features

* **Dropdown:**
  *  add dropdown left-right alignment ([394883cd](https://github.com/SynetoNet/compass-react/commit/394883cdef4d2262c67261d6cf5e32269aad4bba))
  *  add Dropdown component ([feddbe80](https://github.com/SynetoNet/compass-react/commit/feddbe80777edc04dbb76eb353746670ad0964a7))
* **Form:**
  *  move css to component scss files ([1bc382ce](https://github.com/SynetoNet/compass-react/commit/1bc382cef64d45abb06dec8c84a59974231dc4e2))
  *  move ComboBox to Form ([8f7e30c7](https://github.com/SynetoNet/compass-react/commit/8f7e30c73bd141b9be41f6cd95083f92e2b6f231))
  *  moved internal components to separate folders; updated documentation and components menu ([37dc1a15](https://github.com/SynetoNet/compass-react/commit/37dc1a15eb83b8ff20f1dcafb37b7faa47e794e1))
  *  add form components ([1dac0747](https://github.com/SynetoNet/compass-react/commit/1dac0747d5f860704f07b2c5db7a7f57973ceae5))
* **Base:**  add Typography ([d17993b0](https://github.com/SynetoNet/compass-react/commit/d17993b0ea56bdc389f28d165282a5beb7da6c35))
* **Button:**
  *  add ripple effect (fixes [#11](https://github.com/SynetoNet/compass-react/pull/11)) ([29b97674](https://github.com/SynetoNet/compass-react/commit/29b97674840553db39cbef5ce6f57d83b597a5dc))
  *  add warning & info colors ([437ce245](https://github.com/SynetoNet/compass-react/commit/437ce24578e33881b1c46139225e8b1f65feddc2))
  *  loading state ([0e6726a9](https://github.com/SynetoNet/compass-react/commit/0e6726a9f3b183d9ce45fc9a98d2f02411939bf8))
* **Modal:**
  *  add shadow to indicate scroll (fixes [#12](https://github.com/SynetoNet/compass-react/pull/12)) ([f69624ec](https://github.com/SynetoNet/compass-react/commit/f69624ecc2cbf2273c7950a9559c106e158a4d24))
  *  add support for stacked modals (fixes [#8](https://github.com/SynetoNet/compass-react/pull/8)) ([8d2444c4](https://github.com/SynetoNet/compass-react/commit/8d2444c4b0866d9025c9c2feee4507d5b27c391b))
* **DatePicker:**  filter out disabled years ([2081001a](https://github.com/SynetoNet/compass-react/commit/2081001a7f532dcf33d9792229bcf9ce51cb6603))
* **Tabs:**  prevent switching to a non-existing Tab ([8ae6f36b](https://github.com/SynetoNet/compass-react/commit/8ae6f36be82c95a26f2ad95ad3beffd98b92b139))

##### Bug Fixes

* **Form:**
  *  set proper border-radius for Select ([4d870ba2](https://github.com/SynetoNet/compass-react/commit/4d870ba20a3065e6acc10de23193775bed50da57))
  *  uncomment switch width ([f9d91c45](https://github.com/SynetoNet/compass-react/commit/f9d91c456eb165009bc27620d1b2a3a86116a930))
* **Dropdown:**
  *  dropdown alignRight prop ([e0493b1d](https://github.com/SynetoNet/compass-react/commit/e0493b1d4b87f823cd7f3723e095f687acd8b9ac))
  *  set disabled cursor to disabled dropdown item ([69dc8f4a](https://github.com/SynetoNet/compass-react/commit/69dc8f4a36714ea22a910336a9f6d543806739a6))
  *  remove dropdown double arrow ([5cf5d5f0](https://github.com/SynetoNet/compass-react/commit/5cf5d5f0d5000effc5339551820307f02147ccb8))
* **ComboBox:**  set combo box to remain open for multi select ([aa1b25cb](https://github.com/SynetoNet/compass-react/commit/aa1b25cb2f637afb1606374c84d3c5e722945951))
* **DatePicker:**  set Mon first day of the week ([bb1b84a5](https://github.com/SynetoNet/compass-react/commit/bb1b84a5e9255e2be7e0b6818b65777511ba76a2))
* **Fom:**  remove extra Form from menu; remove exposure of Combo Box ([a0d2724a](https://github.com/SynetoNet/compass-react/commit/a0d2724ae8c0f63b2d2fc52ed1a77bb929fe9ac9))
* **Tabs:**  vertical active tab border ([a5a314f6](https://github.com/SynetoNet/compass-react/commit/a5a314f6b086db70a7cce5c3d3073219bd1b5544))

##### Refactors

* **Form:**
  *  remove custom Form.Control ([217b6c5d](https://github.com/SynetoNet/compass-react/commit/217b6c5d5c56eaea7c686a5956ae0999313752f4))
  *  remove empty wrappers ([2ac980a5](https://github.com/SynetoNet/compass-react/commit/2ac980a58d54376e3898b49b40d7783650cb3d1a))
* **Modal:**  simplify scroll shadows (fixes [#15](https://github.com/SynetoNet/compass-react/pull/15)) ([1aa6d9fb](https://github.com/SynetoNet/compass-react/commit/1aa6d9fba80725e9f7d06561ad537d4f8d7af46d))
* **DatePicker:**
  *  use Form elements if no customInput is provided ([80ebb3fe](https://github.com/SynetoNet/compass-react/commit/80ebb3fe69593a5df1908e7504e4bb7aa6a32fe1))
  *  simplify months display ([33f3b834](https://github.com/SynetoNet/compass-react/commit/33f3b8347ecf739605107c108f1147be74dda230))

#### 0.3.3 (2019-05-27)

##### Bug Fixes

* **Modal:**  adjust action buttons spacing & padding ([b82dc865](https://github.com/SynetoNet/compass-react/commit/b82dc86570c576afbdab1849446a7ab6a23603c4))

# 0.3.2 (2019-05-27)

### Documentation Changes

* **Button:**  add spacing between examples ([5e201119](https://github.com/SynetoNet/compass-react/commit/5e20111950308e978b5e3cd5100898d6f97d3303))
* **Badge:**  add spacing between examples ([b90e3a9b](https://github.com/SynetoNet/compass-react/commit/b90e3a9b38f0e9873cbf43acc003e3e0c1654298))

# 0.3.1 (2019-05-27)

### New Features

* **Base:**  include local fonts ([a0e8f351](https://github.com/SynetoNet/compass-react/commit/a0e8f3512668e86590cf7232d2608d78c3da32cf))

### Bug Fixes

* **Modal:**  adjust styling to match design ([0b7e32ba](https://github.com/SynetoNet/compass-react/commit/0b7e32baa76efab1d5fbaf0be4d18b090d417f3f))
* **Button:**  remove padding for tertiary & link variations ([7c127e14](https://github.com/SynetoNet/compass-react/commit/7c127e14cf746d58e89cca4ec516a0ad0405f38a))

# 0.3.0 (2019-05-27)

### New Features

* **Modal:**  add Modal component
* **Button:**  add Button component
* **DatePicker:**  add DatePicker component
* **Base:**  override bootstrap color variables ([be66ac22](https://github.com/SynetoNet/compass-react/commit/be66ac22a96aeca56d4a1af8f811d51a5c767ece))

### Bug Fixes

* **Tabs:**
  *  make border stretch as far as content height for vertical tabs ([#4](https://github.com/SynetoNet/compass-react/pull/4)) ([d38d3e68](https://github.com/SynetoNet/compass-react/commit/d38d3e68855ea36007ac32708c7d95e5cc4d0161))

### Documentation Changes

* **Base:**  add Spacing examples ([b26b3a6a](https://github.com/SynetoNet/compass-react/commit/b26b3a6aabd98f7bc024e8832a3b8e5c5de1cb86))

# 0.2.0 (2019-05-14)

### Documentation Changes

*  show props by default ([fc6ab16a](https://github.com/SynetoNet/compass-react/commit/fc6ab16ae07bbbfad4bcc613571719e41ef0b6b6))

### New Features

* **Tabs:**
  *  add extra content prop ([c3c37149](https://github.com/SynetoNet/compass-react/commit/c3c3714975ca1b9e264cf46d43a5ce27de1872f6))
  *  add right align option ([3b1e13dd](https://github.com/SynetoNet/compass-react/commit/3b1e13dd927f133a86268879144e3f3f4bd59393))
  *  use relative font-size ([a5b0392d](https://github.com/SynetoNet/compass-react/commit/a5b0392d32826e8d556849e35af4b9cdf9d61df6))

# 0.1.4 (2019-05-10)

# 0.1.1 (2019-05-10)

### Breaking Changes

* **Badge:**
  *  rename primary option [breaking] ([ce055720](https://github.com/SynetoNet/compass-react/commit/ce055720bd4b09a734f072e163944c44a6f9e6e1))
  *  rename secondary option [breaking] ([3f7b3e4a](https://github.com/SynetoNet/compass-react/commit/3f7b3e4ae4e97f07bacd6810794a1eeee4d95915))
  *  rename size prop [breaking] ([e4a05da3](https://github.com/SynetoNet/compass-react/commit/e4a05da3ab888dcaff16d8545962ddbeb3a9cd19))

### Documentation Changes

* **Base:**  include docs for colors and layout ([3bc27cbf](https://github.com/SynetoNet/compass-react/commit/3bc27cbfdb9f21aadb47f92d9948346018f9a640))

### New Features

* **Tabs:**  add Tabs component ([13c81432](https://github.com/SynetoNet/compass-react/commit/13c81432476d8e788cb3789a877c6e833893f101))
* **Base:**  Re-export Grid components ([0cf01349](https://github.com/SynetoNet/compass-react/commit/0cf013492d4a844449c4408aa71e35ad68b6b7b3))
* **Badge:**  add badge component ([e4d31523](https://github.com/SynetoNet/compass-react/commit/e4d31523e0e7b17725362d390f86fa608b77f21d))
