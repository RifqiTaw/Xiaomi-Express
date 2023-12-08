'use strict';

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
      'products',
      [
        {
          id: 'e0384f03-fcce-48da-955b-83e3f646da50',
          user_id: 'e94ccd3a-9c18-4696-b83f-4f50e8b3b38d',
          product_name: 'Xiaomi 12 Pro',
          specs: 'WQHD+ DotDisplay AMOLED 6,73”',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '393252fd-b750-479c-a017-0a77ae7279d3',
          user_id: 'e94ccd3a-9c18-4696-b83f-4f50e8b3b38d',
          product_name: 'Redmi 12',
          specs: '50MP triple kamera ~ Layar AMOLED 120Hz',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '57b47765-9976-42e6-b119-05936cccd8ae',
          user_id: 'd0b3dc5a-4113-4c3f-ae3d-5d073278f9fc',
          product_name: 'POCO F5',
          specs: 'Snapdragon 7+ Gen 2 | RAM up to 19GB* | 64MP OIS',
          createdAt: new Date(),
          updatedAt: new Date(),
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
    await queryInterface.bulkDelete('products', null, {});
  },
};
