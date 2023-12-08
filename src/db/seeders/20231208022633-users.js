'use strict';

const { encryptPayload } = require('../../utils/encrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 'e94ccd3a-9c18-4696-b83f-4f50e8b3b38d',
          username: 'admin1',
          password: encryptPayload('password'),
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 'd0b3dc5a-4113-4c3f-ae3d-5d073278f9fc',
          username: 'admin2',
          password: encryptPayload('password'),
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 'f1b4ab3e-4ede-4ebd-a707-c77f0a4b65fb',
          username: 'admin3',
          password: encryptPayload('password'),
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
