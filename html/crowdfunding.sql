
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `CATEGORYID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类别标识',
  `NAME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '名称'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'medical');
INSERT INTO `category` VALUES ('2', 'education');
INSERT INTO `category` VALUES ('3', 'social impact');
INSERT INTO `category` VALUES ('4', 'crisis relief');

-- ----------------------------
-- Table structure for fundraiser
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `FUNDRAISERID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '募捐者 ID (PK)',
  `ORGANIZER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组织者',
  `CAPTION` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `TARGET_FUNDING` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '目标资金',
  `CURRENT_FUNDING` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '当前资金',
  `CITY` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '城市',
  `ACTIVE` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '活跃状态',
  `CATEGORYID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类别'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES ('Dvan', 'Software G211 Class Joint Cross Society', 'Helping children in impoverished mountainous areas to eat and wear warm clothes', '250000', '180000', 'Guangxi', 'Active', '2');
INSERT INTO `fundraiser` VALUES ('Andy', 'Software G211 Class Joint Cross Society', 'Primary education in self-help impoverished mountainous areas', '90000', '55000', 'Guangxi', 'Active', '1');
INSERT INTO `fundraiser` VALUES ('Abner', 'North District Dormitory Building Nine United Cross Society', 'Improving education for residents in remote areas', '88000', '40000', 'Guangxi', 'Active', '2');
INSERT INTO `fundraiser` VALUES ('Carb', 'North District Dormitory Building 11 Joint Cross Society', 'Support the scientific research and development of Guangxi University of Science and Technology', '140000', '80000', 'Guangxi', 'Active', '1');
INSERT INTO `fundraiser` VALUES ('Mike', 'Joint Cross Society, Building 14, North Dormitory', 'Funding the renovation of equipment in the student dormitories of Guangxi University of Science and Technology', '75000', '50000', 'Guangxi', 'Active', '1');
INSERT INTO `fundraiser` VALUES ('Cherly', 'North District Dormitory Building 10 United Cross Society', 'Funding extracurricular reading books for children in welfare institutions', '40000', '15000', 'Guangxi', 'other', '2');
INSERT INTO `fundraiser` VALUES ('Avery', 'North District Dormitory Building 10 United Cross Society', 'Supporting recreational activities for elderly residents in nursing homes', '8000', '5000', 'Guangxi', 'other', '2');

SET FOREIGN_KEY_CHECKS = 1;
