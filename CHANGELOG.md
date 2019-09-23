# 0.11.0 (2019-09-23)

### New Features

* **Toast:**  add color variants ([c66f25c5](https://github.com/SynetoNet/compass-react/commit/c66f25c50e11a9e010022d6ec4c1bc274e22d80e))
* **DatePicker:**  document enforceFocus prop ([d4af4b7a](https://github.com/SynetoNet/compass-react/commit/d4af4b7ac51ad1a127cb329ffa9ae4cc8d39d40d))
* **Form:**  add inline option to form group ([266c64f4](https://github.com/SynetoNet/compass-react/commit/266c64f49786cc992284f059c86bb2295e2732c4))
* **Table:**  add first and last page option ([4afa7149](https://github.com/SynetoNet/compass-react/commit/4afa7149a32ca8d1ebf1d06f7c91c88464ea290c))

### Build System / Dependencies

*  export all components as named exports ([c7d18b8d](https://github.com/SynetoNet/compass-react/commit/c7d18b8ddcd218c4a5fcb63937735b3945072733))

# 0.10.5 (2019-09-16)

### New Features

* **DatePicker:**  add placement prop ([5f886492](https://github.com/SynetoNet/compass-react/commit/5f886492b075a62bcc98144e51a41612d4ac93c8))

# 0.10.4 (2019-08-22)

### Bug Fixes

* **Table:**  prevent Search form submit ([c364d6d5](https://github.com/SynetoNet/compass-react/commit/c364d6d59bbca33a43c504838f382df594165cac))

# 0.10.3 (2019-08-22)

### Bug Fixes

* **Table:**  set type button on search clear button, to prevent form submit ([4cfd0316](https://github.com/SynetoNet/compass-react/commit/4cfd0316c3a055efdca190db208e62e5b3536961))

# 0.10.2 (2019-08-20)

### Bug Fixes

* **Table:**  wrap search input in a Form component to prevent Chrome autocomplete ([2ecef768](https://github.com/SynetoNet/compass-react/commit/2ecef7689e03833ead46b2bb87a13d5c45c3e6d6))

# 0.10.1 (2019-08-05)

### New Features

* **Table:**
  *  add filter feature to tables ([a32c6cc8](https://github.com/SynetoNet/compass-react/commit/a32c6cc8425a46f5e74bc56662af715869219688))
  *  customize pagination props ([7fda9cc2](https://github.com/SynetoNet/compass-react/commit/7fda9cc2f3e1cfd39d6c0639e826e6ae1f3029ca))

### Bug Fixes

* **Table:**
  *  remove filter div if empty; fix empty header ([8da69567](https://github.com/SynetoNet/compass-react/commit/8da69567e1ab03fc8537b99820c77d793f6d7c44))
  *  fix children array ([03ac0a29](https://github.com/SynetoNet/compass-react/commit/03ac0a296c02794a4029c89c493c67860a28e550))

# 0.10.0 (2019-07-23)

### New Features

* **Card:**  add Card component ([ad7f9a75](https://github.com/SynetoNet/compass-react/commit/ad7f9a755e896259881978bab44a24ebb779aae4))

### Bug Fixes

* **Modal:**
  *  enable stacking modals on extended use ([88576c48](https://github.com/SynetoNet/compass-react/commit/88576c4843f288c3848870a0f5d6c43dbf4b1d74))

# 0.9.1 (2019-07-17)

### New Features

* **Modal:**  add disabled prop to actions ([7c4637f2](https://github.com/SynetoNet/compass-react/commit/7c4637f2ccd1828d22aeac53bd86e10730e04d0f))

# 0.9.0 (2019-07-15)

### New Features

* **Toast:**  Add Toast component ([b6c8042c](https://github.com/SynetoNet/compass-react/commit/b6c8042c5d640716ba937f92a2ffa88d8c5b4ab2))
* **Alert:**  Add Alert component ([3bc1d0ef](https://github.com/SynetoNet/compass-react/commit/3bc1d0ef16887633d4fb7709487d5531de522ef9))
* **Dropdown:**  support custom trigger ([72cc3a0d](https://github.com/SynetoNet/compass-react/commit/72cc3a0d73e50e6c80e1b1a76604799050e9cd68))

### Bug Fixes

* **Modal:**
  *  include backdrop to modal tests ([2901a533](https://github.com/SynetoNet/compass-react/commit/2901a533630a23d6bda05b342d9ec4f3d427aeef))
  *  set backdrop prop default to static ([a3103f88](https://github.com/SynetoNet/compass-react/commit/a3103f888b41196d9c44b6112d9bd907985a3a3f))
* **Dropdown:**  make dropdown inline-block ([07c19419](https://github.com/SynetoNet/compass-react/commit/07c194190e315b140e8a8e9d874fc2b1b20bfbf6))

### Build System / Dependencies

*  export Table and ComboBox as separate bundles ([8873df47](https://github.com/SynetoNet/compass-react/commit/8873df47c2af39d6336998bf6c67bd6536f165b8))
*  export Tooltip and Popover ([0ceea4bb](https://github.com/SynetoNet/compass-react/commit/0ceea4bbfcf2cfbaa787e83aeae9aacb5bc882fe))

### Documentation Changes

* **Dropdown:**  update Dropdown docs ([3fe48645](https://github.com/SynetoNet/compass-react/commit/3fe486452084ceb260e62c7707f4e604cf020dc4))

### Refactors

* **Icon:**
  *  Change Icon size implementation - remove the mapping object ([586054be](https://github.com/SynetoNet/compass-react/commit/586054be97fa678009ebf5a835d246d1d5b37a84))
  *  Change Icon size implementation ([dbb62d3f](https://github.com/SynetoNet/compass-react/commit/dbb62d3f3e9ad8b5b29924f23315c8603f8a278f))
  *  Remove fonts and css that are not needed. Updated documentation ([a9d52807](https://github.com/SynetoNet/compass-react/commit/a9d52807b4fdd3ed9db93d8b7b7684ead2773a08))

# 0.8.2 (2019-07-10)

### New Features

* **Popover:**
  *  support nested Overlays ([d374e9da](https://github.com/SynetoNet/compass-react/commit/d374e9dad6dfdf44b56d76e0be48181516525895))
  *  make title optional ([10a7169a](https://github.com/SynetoNet/compass-react/commit/10a7169a95ade49e2f57302a49a05e7952b3545c))

### Documentation Changes

* **Popover:**  include examples with and without title ([c695f195](https://github.com/SynetoNet/compass-react/commit/c695f195f2cce42433f7260dd8484bd6d131a4d9))

# 0.8.1 (2019-07-10)

### New Features

* **Tooltip:**  close on click outside ([1490a826](https://github.com/SynetoNet/compass-react/commit/1490a82619a19fe2a09a63d3f1180b838ce0cad0))
* **Popover:**  close on click outside ([0599245e](https://github.com/SynetoNet/compass-react/commit/0599245ebe74a699e0af895655c91515996770b8))

### Build System / Dependencies

*  export Table and ComboBox as separate bundles ([8873df47](https://github.com/SynetoNet/compass-react/commit/8873df47c2af39d6336998bf6c67bd6536f165b8))

# 0.8.0 (2019-07-08)

### New Features

* **Icon:**  add Icon component ([452094e1](https://github.com/SynetoNet/compass-react/commit/452094e125f6452248ad59d48565dc60a062b289))
* **Tooltip:**  add Tooltip component ([bc0d5ab1](https://github.com/SynetoNet/compass-react/commit/bc0d5ab10f755f5eb9d1ed09c7057db5d5c405c6))
* **Popover:**  add Popover component ([acb6f890](https://github.com/SynetoNet/compass-react/commit/acb6f89058ae7335f6ce48453df9dd7e7508d916))
* **List:**  add List component ([a7f5c78c](https://github.com/SynetoNet/compass-react/commit/a7f5c78c5f2d237ccfdcb8cf64bf3dce2d6088bb))
* **Dropdown:**  support custom trigger ([72cc3a0d](https://github.com/SynetoNet/compass-react/commit/72cc3a0d73e50e6c80e1b1a76604799050e9cd68))

### Bug Fixes

* **Dropdown:**  make dropdown inline-block ([07c19419](https://github.com/SynetoNet/compass-react/commit/07c194190e315b140e8a8e9d874fc2b1b20bfbf6))

# 0.7.0 (2019-06-27)

### Build System / Dependencies

* **ComboBox:**  export it as a peer dependency not bundled in compass ([931cc181](https://github.com/SynetoNet/compass-react/commit/931cc1812cc047596fe0057fe7acd007b7747f1e))

### Refactors

* **Table:**
  *  rewrite it as function component ([538b6624](https://github.com/SynetoNet/compass-react/commit/538b6624a75fdffac509f10bc83a9e4c88ab8ccc))
  *  simplify scrollable feature ([fe6b1f5a](https://github.com/SynetoNet/compass-react/commit/fe6b1f5acc9c0fa94a79e0d7975cdbcdb5c0560c))

# 0.6.0 (2019-06-26)

### New Features

* **Table:**  add table component
* **Badge:**  support extra className ([1ad138bc](https://github.com/SynetoNet/compass-react/commit/1ad138bca631052a9fba423aa239a91a1021ab68))
* **Check:**  add indeterminate state for checkbox ([38d8f016](https://github.com/SynetoNet/compass-react/commit/38d8f016111659d90f65186229e9d31125d565f4))

### Build System / Dependencies

*  prefer local modules instead of build-in node modules ([5d218d08](https://github.com/SynetoNet/compass-react/commit/5d218d085486717b014f59c48df10acfc457fb06))

### Documentation Changes

* **Tabs:**  add example for custom tab title ([2088bbf6](https://github.com/SynetoNet/compass-react/commit/2088bbf6be43d7ce3b79e51629cf904add885257))

##### Refactors

* **Table:**
  *  extract column options ([983f1406](https://github.com/SynetoNet/compass-react/commit/983f14060135c5aa7b1951efe27b07d4bfd3bf76))
  *  extract components ([02a71a54](https://github.com/SynetoNet/compass-react/commit/02a71a5427e451500d65cb69c3118778d8fb89b1))

# 0.5.2 (2019-06-21)

### Build System / Dependencies

*  fix production build for Switch component ([216e0527](https://github.com/SynetoNet/compass-react/commit/216e05275922322717fe424e484b3a2ea80e9f08))
*  fix production build for Fade/Transition component ([256cdd27](https://github.com/SynetoNet/compass-react/commit/256cdd27b2d5c81a0fe7a180bd12cfc1f327819b))

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
