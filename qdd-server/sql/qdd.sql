/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : qdd

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 10/07/2022 17:21:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for userentity
-- ----------------------------
DROP TABLE IF EXISTS `userentity`;
CREATE TABLE `userentity`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户的自增ID',
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户密码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userentity
-- ----------------------------
INSERT INTO `userentity` VALUES (1, 'pdd', 'A025F0ECBC7EA235AF5BEE1CEEA8E886');

SET FOREIGN_KEY_CHECKS = 1;
