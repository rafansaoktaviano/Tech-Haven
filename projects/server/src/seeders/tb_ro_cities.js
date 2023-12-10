"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "tb_ro_cities",
      [
        {
            "city_id": 1,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Barat",
            "postal_code": 23681
        },
        {
            "city_id": 2,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Barat Daya",
            "postal_code": 23764
        },
        {
            "city_id": 3,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Besar",
            "postal_code": 23951
        },
        {
            "city_id": 4,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Jaya",
            "postal_code": 23654
        },
        {
            "city_id": 5,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Selatan",
            "postal_code": 23719
        },
        {
            "city_id": 6,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Singkil",
            "postal_code": 24785
        },
        {
            "city_id": 7,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Tamiang",
            "postal_code": 24476
        },
        {
            "city_id": 8,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Tengah",
            "postal_code": 24511
        },
        {
            "city_id": 9,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Tenggara",
            "postal_code": 24611
        },
        {
            "city_id": 10,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Timur",
            "postal_code": 24454
        },
        {
            "city_id": 11,
            "provinces_id": 21,
            "city_name": "Kabupaten Aceh Utara",
            "postal_code": 24382
        },
        {
            "city_id": 12,
            "provinces_id": 32,
            "city_name": "Kabupaten Agam",
            "postal_code": 26411
        },
        {
            "city_id": 13,
            "provinces_id": 23,
            "city_name": "Kabupaten Alor",
            "postal_code": 85811
        },
        {
            "city_id": 14,
            "provinces_id": 19,
            "city_name": "Kota Ambon",
            "postal_code": 97222
        },
        {
            "city_id": 15,
            "provinces_id": 34,
            "city_name": "Kabupaten Asahan",
            "postal_code": 21214
        },
        {
            "city_id": 16,
            "provinces_id": 24,
            "city_name": "Kabupaten Asmat",
            "postal_code": 99777
        },
        {
            "city_id": 17,
            "provinces_id": 1,
            "city_name": "Kabupaten Badung",
            "postal_code": 80351
        },
        {
            "city_id": 18,
            "provinces_id": 13,
            "city_name": "Kabupaten Balangan",
            "postal_code": 71611
        },
        {
            "city_id": 19,
            "provinces_id": 15,
            "city_name": "Kota Balikpapan",
            "postal_code": 76111
        },
        {
            "city_id": 20,
            "provinces_id": 21,
            "city_name": "Kota Banda Aceh",
            "postal_code": 23238
        },
        {
            "city_id": 21,
            "provinces_id": 18,
            "city_name": "Kota Bandar Lampung",
            "postal_code": 35139
        },
        {
            "city_id": 22,
            "provinces_id": 9,
            "city_name": "Kabupaten Bandung",
            "postal_code": 40311
        },
        {
            "city_id": 23,
            "provinces_id": 9,
            "city_name": "Kota Bandung",
            "postal_code": 40111
        },
        {
            "city_id": 24,
            "provinces_id": 9,
            "city_name": "Kabupaten Bandung Barat",
            "postal_code": 40721
        },
        {
            "city_id": 25,
            "provinces_id": 29,
            "city_name": "Kabupaten Banggai",
            "postal_code": 94711
        },
        {
            "city_id": 26,
            "provinces_id": 29,
            "city_name": "Kabupaten Banggai Kepulauan",
            "postal_code": 94881
        },
        {
            "city_id": 27,
            "provinces_id": 2,
            "city_name": "Kabupaten Bangka",
            "postal_code": 33212
        },
        {
            "city_id": 28,
            "provinces_id": 2,
            "city_name": "Kabupaten Bangka Barat",
            "postal_code": 33315
        },
        {
            "city_id": 29,
            "provinces_id": 2,
            "city_name": "Kabupaten Bangka Selatan",
            "postal_code": 33719
        },
        {
            "city_id": 30,
            "provinces_id": 2,
            "city_name": "Kabupaten Bangka Tengah",
            "postal_code": 33613
        },
        {
            "city_id": 31,
            "provinces_id": 11,
            "city_name": "Kabupaten Bangkalan",
            "postal_code": 69118
        },
        {
            "city_id": 32,
            "provinces_id": 1,
            "city_name": "Kabupaten Bangli",
            "postal_code": 80619
        },
        {
            "city_id": 33,
            "provinces_id": 13,
            "city_name": "Kabupaten Banjar",
            "postal_code": 70619
        },
        {
            "city_id": 34,
            "provinces_id": 9,
            "city_name": "Kota Banjar",
            "postal_code": 46311
        },
        {
            "city_id": 35,
            "provinces_id": 13,
            "city_name": "Kota Banjarbaru",
            "postal_code": 70712
        },
        {
            "city_id": 36,
            "provinces_id": 13,
            "city_name": "Kota Banjarmasin",
            "postal_code": 70117
        },
        {
            "city_id": 37,
            "provinces_id": 10,
            "city_name": "Kabupaten Banjarnegara",
            "postal_code": 53419
        },
        {
            "city_id": 38,
            "provinces_id": 28,
            "city_name": "Kabupaten Bantaeng",
            "postal_code": 92411
        },
        {
            "city_id": 39,
            "provinces_id": 5,
            "city_name": "Kabupaten Bantul",
            "postal_code": 55715
        },
        {
            "city_id": 40,
            "provinces_id": 33,
            "city_name": "Kabupaten Banyuasin",
            "postal_code": 30911
        },
        {
            "city_id": 41,
            "provinces_id": 10,
            "city_name": "Kabupaten Banyumas",
            "postal_code": 53114
        },
        {
            "city_id": 42,
            "provinces_id": 11,
            "city_name": "Kabupaten Banyuwangi",
            "postal_code": 68416
        },
        {
            "city_id": 43,
            "provinces_id": 13,
            "city_name": "Kabupaten Barito Kuala",
            "postal_code": 70511
        },
        {
            "city_id": 44,
            "provinces_id": 14,
            "city_name": "Kabupaten Barito Selatan",
            "postal_code": 73711
        },
        {
            "city_id": 45,
            "provinces_id": 14,
            "city_name": "Kabupaten Barito Timur",
            "postal_code": 73671
        },
        {
            "city_id": 46,
            "provinces_id": 14,
            "city_name": "Kabupaten Barito Utara",
            "postal_code": 73881
        },
        {
            "city_id": 47,
            "provinces_id": 28,
            "city_name": "Kabupaten Barru",
            "postal_code": 90719
        },
        {
            "city_id": 48,
            "provinces_id": 17,
            "city_name": "Kota Batam",
            "postal_code": 29413
        },
        {
            "city_id": 49,
            "provinces_id": 10,
            "city_name": "Kabupaten Batang",
            "postal_code": 51211
        },
        {
            "city_id": 50,
            "provinces_id": 8,
            "city_name": "Kabupaten Batang Hari",
            "postal_code": 36613
        },
        {
            "city_id": 51,
            "provinces_id": 11,
            "city_name": "Kota Batu",
            "postal_code": 65311
        },
        {
            "city_id": 52,
            "provinces_id": 34,
            "city_name": "Kabupaten Batu Bara",
            "postal_code": 21655
        },
        {
            "city_id": 53,
            "provinces_id": 30,
            "city_name": "Kota Bau-Bau",
            "postal_code": 93719
        },
        {
            "city_id": 54,
            "provinces_id": 9,
            "city_name": "Kabupaten Bekasi",
            "postal_code": 17837
        },
        {
            "city_id": 55,
            "provinces_id": 9,
            "city_name": "Kota Bekasi",
            "postal_code": 17121
        },
        {
            "city_id": 56,
            "provinces_id": 2,
            "city_name": "Kabupaten Belitung",
            "postal_code": 33419
        },
        {
            "city_id": 57,
            "provinces_id": 2,
            "city_name": "Kabupaten Belitung Timur",
            "postal_code": 33519
        },
        {
            "city_id": 58,
            "provinces_id": 23,
            "city_name": "Kabupaten Belu",
            "postal_code": 85711
        },
        {
            "city_id": 59,
            "provinces_id": 21,
            "city_name": "Kabupaten Bener Meriah",
            "postal_code": 24581
        },
        {
            "city_id": 60,
            "provinces_id": 26,
            "city_name": "Kabupaten Bengkalis",
            "postal_code": 28719
        },
        {
            "city_id": 61,
            "provinces_id": 12,
            "city_name": "Kabupaten Bengkayang",
            "postal_code": 79213
        },
        {
            "city_id": 62,
            "provinces_id": 4,
            "city_name": "Kota Bengkulu",
            "postal_code": 38229
        },
        {
            "city_id": 63,
            "provinces_id": 4,
            "city_name": "Kabupaten Bengkulu Selatan",
            "postal_code": 38519
        },
        {
            "city_id": 64,
            "provinces_id": 4,
            "city_name": "Kabupaten Bengkulu Tengah",
            "postal_code": 38319
        },
        {
            "city_id": 65,
            "provinces_id": 4,
            "city_name": "Kabupaten Bengkulu Utara",
            "postal_code": 38619
        },
        {
            "city_id": 66,
            "provinces_id": 15,
            "city_name": "Kabupaten Berau",
            "postal_code": 77311
        },
        {
            "city_id": 67,
            "provinces_id": 24,
            "city_name": "Kabupaten Biak Numfor",
            "postal_code": 98119
        },
        {
            "city_id": 68,
            "provinces_id": 22,
            "city_name": "Kabupaten Bima",
            "postal_code": 84171
        },
        {
            "city_id": 69,
            "provinces_id": 22,
            "city_name": "Kota Bima",
            "postal_code": 84139
        },
        {
            "city_id": 70,
            "provinces_id": 34,
            "city_name": "Kota Binjai",
            "postal_code": 20712
        },
        {
            "city_id": 71,
            "provinces_id": 17,
            "city_name": "Kabupaten Bintan",
            "postal_code": 29135
        },
        {
            "city_id": 72,
            "provinces_id": 21,
            "city_name": "Kabupaten Bireuen",
            "postal_code": 24219
        },
        {
            "city_id": 73,
            "provinces_id": 31,
            "city_name": "Kota Bitung",
            "postal_code": 95512
        },
        {
            "city_id": 74,
            "provinces_id": 11,
            "city_name": "Kabupaten Blitar",
            "postal_code": 66171
        },
        {
            "city_id": 75,
            "provinces_id": 11,
            "city_name": "Kota Blitar",
            "postal_code": 66124
        },
        {
            "city_id": 76,
            "provinces_id": 10,
            "city_name": "Kabupaten Blora",
            "postal_code": 58219
        },
        {
            "city_id": 77,
            "provinces_id": 7,
            "city_name": "Kabupaten Boalemo",
            "postal_code": 96319
        },
        {
            "city_id": 78,
            "provinces_id": 9,
            "city_name": "Kabupaten Bogor",
            "postal_code": 16911
        },
        {
            "city_id": 79,
            "provinces_id": 9,
            "city_name": "Kota Bogor",
            "postal_code": 16119
        },
        {
            "city_id": 80,
            "provinces_id": 11,
            "city_name": "Kabupaten Bojonegoro",
            "postal_code": 62119
        },
        {
            "city_id": 81,
            "provinces_id": 31,
            "city_name": "Kabupaten Bolaang Mongondow (Bolmong)",
            "postal_code": 95755
        },
        {
            "city_id": 82,
            "provinces_id": 31,
            "city_name": "Kabupaten Bolaang Mongondow Selatan",
            "postal_code": 95774
        },
        {
            "city_id": 83,
            "provinces_id": 31,
            "city_name": "Kabupaten Bolaang Mongondow Timur",
            "postal_code": 95783
        },
        {
            "city_id": 84,
            "provinces_id": 31,
            "city_name": "Kabupaten Bolaang Mongondow Utara",
            "postal_code": 95765
        },
        {
            "city_id": 85,
            "provinces_id": 30,
            "city_name": "Kabupaten Bombana",
            "postal_code": 93771
        },
        {
            "city_id": 86,
            "provinces_id": 11,
            "city_name": "Kabupaten Bondowoso",
            "postal_code": 68219
        },
        {
            "city_id": 87,
            "provinces_id": 28,
            "city_name": "Kabupaten Bone",
            "postal_code": 92713
        },
        {
            "city_id": 88,
            "provinces_id": 7,
            "city_name": "Kabupaten Bone Bolango",
            "postal_code": 96511
        },
        {
            "city_id": 89,
            "provinces_id": 15,
            "city_name": "Kota Bontang",
            "postal_code": 75313
        },
        {
            "city_id": 90,
            "provinces_id": 24,
            "city_name": "Kabupaten Boven Digoel",
            "postal_code": 99662
        },
        {
            "city_id": 91,
            "provinces_id": 10,
            "city_name": "Kabupaten Boyolali",
            "postal_code": 57312
        },
        {
            "city_id": 92,
            "provinces_id": 10,
            "city_name": "Kabupaten Brebes",
            "postal_code": 52212
        },
        {
            "city_id": 93,
            "provinces_id": 32,
            "city_name": "Kota Bukittinggi",
            "postal_code": 26115
        },
        {
            "city_id": 94,
            "provinces_id": 1,
            "city_name": "Kabupaten Buleleng",
            "postal_code": 81111
        },
        {
            "city_id": 95,
            "provinces_id": 28,
            "city_name": "Kabupaten Bulukumba",
            "postal_code": 92511
        },
        {
            "city_id": 96,
            "provinces_id": 16,
            "city_name": "Kabupaten Bulungan (Bulongan)",
            "postal_code": 77211
        },
        {
            "city_id": 97,
            "provinces_id": 8,
            "city_name": "Kabupaten Bungo",
            "postal_code": 37216
        },
        {
            "city_id": 98,
            "provinces_id": 29,
            "city_name": "Kabupaten Buol",
            "postal_code": 94564
        },
        {
            "city_id": 99,
            "provinces_id": 19,
            "city_name": "Kabupaten Buru",
            "postal_code": 97371
        },
        {
            "city_id": 100,
            "provinces_id": 19,
            "city_name": "Kabupaten Buru Selatan",
            "postal_code": 97351
        },
        {
            "city_id": 101,
            "provinces_id": 30,
            "city_name": "Kabupaten Buton",
            "postal_code": 93754
        },
        {
            "city_id": 102,
            "provinces_id": 30,
            "city_name": "Kabupaten Buton Utara",
            "postal_code": 93745
        },
        {
            "city_id": 103,
            "provinces_id": 9,
            "city_name": "Kabupaten Ciamis",
            "postal_code": 46211
        },
        {
            "city_id": 104,
            "provinces_id": 9,
            "city_name": "Kabupaten Cianjur",
            "postal_code": 43217
        },
        {
            "city_id": 105,
            "provinces_id": 10,
            "city_name": "Kabupaten Cilacap",
            "postal_code": 53211
        },
        {
            "city_id": 106,
            "provinces_id": 3,
            "city_name": "Kota Cilegon",
            "postal_code": 42417
        },
        {
            "city_id": 107,
            "provinces_id": 9,
            "city_name": "Kota Cimahi",
            "postal_code": 40512
        },
        {
            "city_id": 108,
            "provinces_id": 9,
            "city_name": "Kabupaten Cirebon",
            "postal_code": 45611
        },
        {
            "city_id": 109,
            "provinces_id": 9,
            "city_name": "Kota Cirebon",
            "postal_code": 45116
        },
        {
            "city_id": 110,
            "provinces_id": 34,
            "city_name": "Kabupaten Dairi",
            "postal_code": 22211
        },
        {
            "city_id": 111,
            "provinces_id": 24,
            "city_name": "Kabupaten Deiyai (Deliyai)",
            "postal_code": 98784
        },
        {
            "city_id": 112,
            "provinces_id": 34,
            "city_name": "Kabupaten Deli Serdang",
            "postal_code": 20511
        },
        {
            "city_id": 113,
            "provinces_id": 10,
            "city_name": "Kabupaten Demak",
            "postal_code": 59519
        },
        {
            "city_id": 114,
            "provinces_id": 1,
            "city_name": "Kota Denpasar",
            "postal_code": 80227
        },
        {
            "city_id": 115,
            "provinces_id": 9,
            "city_name": "Kota Depok",
            "postal_code": 16416
        },
        {
            "city_id": 116,
            "provinces_id": 32,
            "city_name": "Kabupaten Dharmasraya",
            "postal_code": 27612
        },
        {
            "city_id": 117,
            "provinces_id": 24,
            "city_name": "Kabupaten Dogiyai",
            "postal_code": 98866
        },
        {
            "city_id": 118,
            "provinces_id": 22,
            "city_name": "Kabupaten Dompu",
            "postal_code": 84217
        },
        {
            "city_id": 119,
            "provinces_id": 29,
            "city_name": "Kabupaten Donggala",
            "postal_code": 94341
        },
        {
            "city_id": 120,
            "provinces_id": 26,
            "city_name": "Kota Dumai",
            "postal_code": 28811
        },
        {
            "city_id": 121,
            "provinces_id": 33,
            "city_name": "Kabupaten Empat Lawang",
            "postal_code": 31811
        },
        {
            "city_id": 122,
            "provinces_id": 23,
            "city_name": "Kabupaten Ende",
            "postal_code": 86351
        },
        {
            "city_id": 123,
            "provinces_id": 28,
            "city_name": "Kabupaten Enrekang",
            "postal_code": 91719
        },
        {
            "city_id": 124,
            "provinces_id": 25,
            "city_name": "Kabupaten Fakfak",
            "postal_code": 98651
        },
        {
            "city_id": 125,
            "provinces_id": 23,
            "city_name": "Kabupaten Flores Timur",
            "postal_code": 86213
        },
        {
            "city_id": 126,
            "provinces_id": 9,
            "city_name": "Kabupaten Garut",
            "postal_code": 44126
        },
        {
            "city_id": 127,
            "provinces_id": 21,
            "city_name": "Kabupaten Gayo Lues",
            "postal_code": 24653
        },
        {
            "city_id": 128,
            "provinces_id": 1,
            "city_name": "Kabupaten Gianyar",
            "postal_code": 80519
        },
        {
            "city_id": 129,
            "provinces_id": 7,
            "city_name": "Kabupaten Gorontalo",
            "postal_code": 96218
        },
        {
            "city_id": 130,
            "provinces_id": 7,
            "city_name": "Kota Gorontalo",
            "postal_code": 96115
        },
        {
            "city_id": 131,
            "provinces_id": 7,
            "city_name": "Kabupaten Gorontalo Utara",
            "postal_code": 96611
        },
        {
            "city_id": 132,
            "provinces_id": 28,
            "city_name": "Kabupaten Gowa",
            "postal_code": 92111
        },
        {
            "city_id": 133,
            "provinces_id": 11,
            "city_name": "Kabupaten Gresik",
            "postal_code": 61115
        },
        {
            "city_id": 134,
            "provinces_id": 10,
            "city_name": "Kabupaten Grobogan",
            "postal_code": 58111
        },
        {
            "city_id": 135,
            "provinces_id": 5,
            "city_name": "Kabupaten Gunung Kidul",
            "postal_code": 55812
        },
        {
            "city_id": 136,
            "provinces_id": 14,
            "city_name": "Kabupaten Gunung Mas",
            "postal_code": 74511
        },
        {
            "city_id": 137,
            "provinces_id": 34,
            "city_name": "Kota Gunungsitoli",
            "postal_code": 22813
        },
        {
            "city_id": 138,
            "provinces_id": 20,
            "city_name": "Kabupaten Halmahera Barat",
            "postal_code": 97757
        },
        {
            "city_id": 139,
            "provinces_id": 20,
            "city_name": "Kabupaten Halmahera Selatan",
            "postal_code": 97911
        },
        {
            "city_id": 140,
            "provinces_id": 20,
            "city_name": "Kabupaten Halmahera Tengah",
            "postal_code": 97853
        },
        {
            "city_id": 141,
            "provinces_id": 20,
            "city_name": "Kabupaten Halmahera Timur",
            "postal_code": 97862
        },
        {
            "city_id": 142,
            "provinces_id": 20,
            "city_name": "Kabupaten Halmahera Utara",
            "postal_code": 97762
        },
        {
            "city_id": 143,
            "provinces_id": 13,
            "city_name": "Kabupaten Hulu Sungai Selatan",
            "postal_code": 71212
        },
        {
            "city_id": 144,
            "provinces_id": 13,
            "city_name": "Kabupaten Hulu Sungai Tengah",
            "postal_code": 71313
        },
        {
            "city_id": 145,
            "provinces_id": 13,
            "city_name": "Kabupaten Hulu Sungai Utara",
            "postal_code": 71419
        },
        {
            "city_id": 146,
            "provinces_id": 34,
            "city_name": "Kabupaten Humbang Hasundutan",
            "postal_code": 22457
        },
        {
            "city_id": 147,
            "provinces_id": 26,
            "city_name": "Kabupaten Indragiri Hilir",
            "postal_code": 29212
        },
        {
            "city_id": 148,
            "provinces_id": 26,
            "city_name": "Kabupaten Indragiri Hulu",
            "postal_code": 29319
        },
        {
            "city_id": 149,
            "provinces_id": 9,
            "city_name": "Kabupaten Indramayu",
            "postal_code": 45214
        },
        {
            "city_id": 150,
            "provinces_id": 24,
            "city_name": "Kabupaten Intan Jaya",
            "postal_code": 98771
        },
        {
            "city_id": 151,
            "provinces_id": 6,
            "city_name": "Kota Jakarta Barat",
            "postal_code": 11220
        },
        {
            "city_id": 152,
            "provinces_id": 6,
            "city_name": "Kota Jakarta Pusat",
            "postal_code": 10540
        },
        {
            "city_id": 153,
            "provinces_id": 6,
            "city_name": "Kota Jakarta Selatan",
            "postal_code": 12230
        },
        {
            "city_id": 154,
            "provinces_id": 6,
            "city_name": "Kota Jakarta Timur",
            "postal_code": 13330
        },
        {
            "city_id": 155,
            "provinces_id": 6,
            "city_name": "Kota Jakarta Utara",
            "postal_code": 14140
        },
        {
            "city_id": 156,
            "provinces_id": 8,
            "city_name": "Kota Jambi",
            "postal_code": 36111
        },
        {
            "city_id": 157,
            "provinces_id": 24,
            "city_name": "Kabupaten Jayapura",
            "postal_code": 99352
        },
        {
            "city_id": 158,
            "provinces_id": 24,
            "city_name": "Kota Jayapura",
            "postal_code": 99114
        },
        {
            "city_id": 159,
            "provinces_id": 24,
            "city_name": "Kabupaten Jayawijaya",
            "postal_code": 99511
        },
        {
            "city_id": 160,
            "provinces_id": 11,
            "city_name": "Kabupaten Jember",
            "postal_code": 68113
        },
        {
            "city_id": 161,
            "provinces_id": 1,
            "city_name": "Kabupaten Jembrana",
            "postal_code": 82251
        },
        {
            "city_id": 162,
            "provinces_id": 28,
            "city_name": "Kabupaten Jeneponto",
            "postal_code": 92319
        },
        {
            "city_id": 163,
            "provinces_id": 10,
            "city_name": "Kabupaten Jepara",
            "postal_code": 59419
        },
        {
            "city_id": 164,
            "provinces_id": 11,
            "city_name": "Kabupaten Jombang",
            "postal_code": 61415
        },
        {
            "city_id": 165,
            "provinces_id": 25,
            "city_name": "Kabupaten Kaimana",
            "postal_code": 98671
        },
        {
            "city_id": 166,
            "provinces_id": 26,
            "city_name": "Kabupaten Kampar",
            "postal_code": 28411
        },
        {
            "city_id": 167,
            "provinces_id": 14,
            "city_name": "Kabupaten Kapuas",
            "postal_code": 73583
        },
        {
            "city_id": 168,
            "provinces_id": 12,
            "city_name": "Kabupaten Kapuas Hulu",
            "postal_code": 78719
        },
        {
            "city_id": 169,
            "provinces_id": 10,
            "city_name": "Kabupaten Karanganyar",
            "postal_code": 57718
        },
        {
            "city_id": 170,
            "provinces_id": 1,
            "city_name": "Kabupaten Karangasem",
            "postal_code": 80819
        },
        {
            "city_id": 171,
            "provinces_id": 9,
            "city_name": "Kabupaten Karawang",
            "postal_code": 41311
        },
        {
            "city_id": 172,
            "provinces_id": 17,
            "city_name": "Kabupaten Karimun",
            "postal_code": 29611
        },
        {
            "city_id": 173,
            "provinces_id": 34,
            "city_name": "Kabupaten Karo",
            "postal_code": 22119
        },
        {
            "city_id": 174,
            "provinces_id": 14,
            "city_name": "Kabupaten Katingan",
            "postal_code": 74411
        },
        {
            "city_id": 175,
            "provinces_id": 4,
            "city_name": "Kabupaten Kaur",
            "postal_code": 38911
        },
        {
            "city_id": 176,
            "provinces_id": 12,
            "city_name": "Kabupaten Kayong Utara",
            "postal_code": 78852
        },
        {
            "city_id": 177,
            "provinces_id": 10,
            "city_name": "Kabupaten Kebumen",
            "postal_code": 54319
        },
        {
            "city_id": 178,
            "provinces_id": 11,
            "city_name": "Kabupaten Kediri",
            "postal_code": 64184
        },
        {
            "city_id": 179,
            "provinces_id": 11,
            "city_name": "Kota Kediri",
            "postal_code": 64125
        },
        {
            "city_id": 180,
            "provinces_id": 24,
            "city_name": "Kabupaten Keerom",
            "postal_code": 99461
        },
        {
            "city_id": 181,
            "provinces_id": 10,
            "city_name": "Kabupaten Kendal",
            "postal_code": 51314
        },
        {
            "city_id": 182,
            "provinces_id": 30,
            "city_name": "Kota Kendari",
            "postal_code": 93126
        },
        {
            "city_id": 183,
            "provinces_id": 4,
            "city_name": "Kabupaten Kepahiang",
            "postal_code": 39319
        },
        {
            "city_id": 184,
            "provinces_id": 17,
            "city_name": "Kabupaten Kepulauan Anambas",
            "postal_code": 29991
        },
        {
            "city_id": 185,
            "provinces_id": 19,
            "city_name": "Kabupaten Kepulauan Aru",
            "postal_code": 97681
        },
        {
            "city_id": 186,
            "provinces_id": 32,
            "city_name": "Kabupaten Kepulauan Mentawai",
            "postal_code": 25771
        },
        {
            "city_id": 187,
            "provinces_id": 26,
            "city_name": "Kabupaten Kepulauan Meranti",
            "postal_code": 28791
        },
        {
            "city_id": 188,
            "provinces_id": 31,
            "city_name": "Kabupaten Kepulauan Sangihe",
            "postal_code": 95819
        },
        {
            "city_id": 189,
            "provinces_id": 6,
            "city_name": "Kabupaten Kepulauan Seribu",
            "postal_code": 14550
        },
        {
            "city_id": 190,
            "provinces_id": 31,
            "city_name": "Kabupaten Kepulauan Siau Tagulandang Biaro (Sitaro)",
            "postal_code": 95862
        },
        {
            "city_id": 191,
            "provinces_id": 20,
            "city_name": "Kabupaten Kepulauan Sula",
            "postal_code": 97995
        },
        {
            "city_id": 192,
            "provinces_id": 31,
            "city_name": "Kabupaten Kepulauan Talaud",
            "postal_code": 95885
        },
        {
            "city_id": 193,
            "provinces_id": 24,
            "city_name": "Kabupaten Kepulauan Yapen (Yapen Waropen)",
            "postal_code": 98211
        },
        {
            "city_id": 194,
            "provinces_id": 8,
            "city_name": "Kabupaten Kerinci",
            "postal_code": 37167
        },
        {
            "city_id": 195,
            "provinces_id": 12,
            "city_name": "Kabupaten Ketapang",
            "postal_code": 78874
        },
        {
            "city_id": 196,
            "provinces_id": 10,
            "city_name": "Kabupaten Klaten",
            "postal_code": 57411
        },
        {
            "city_id": 197,
            "provinces_id": 1,
            "city_name": "Kabupaten Klungkung",
            "postal_code": 80719
        },
        {
            "city_id": 198,
            "provinces_id": 30,
            "city_name": "Kabupaten Kolaka",
            "postal_code": 93511
        },
        {
            "city_id": 199,
            "provinces_id": 30,
            "city_name": "Kabupaten Kolaka Utara",
            "postal_code": 93911
        },
        {
            "city_id": 200,
            "provinces_id": 30,
            "city_name": "Kabupaten Konawe",
            "postal_code": 93411
        },
        {
            "city_id": 201,
            "provinces_id": 30,
            "city_name": "Kabupaten Konawe Selatan",
            "postal_code": 93811
        },
        {
            "city_id": 202,
            "provinces_id": 30,
            "city_name": "Kabupaten Konawe Utara",
            "postal_code": 93311
        },
        {
            "city_id": 203,
            "provinces_id": 13,
            "city_name": "Kabupaten Kotabaru",
            "postal_code": 72119
        },
        {
            "city_id": 204,
            "provinces_id": 31,
            "city_name": "Kota Kotamobagu",
            "postal_code": 95711
        },
        {
            "city_id": 205,
            "provinces_id": 14,
            "city_name": "Kabupaten Kotawaringin Barat",
            "postal_code": 74119
        },
        {
            "city_id": 206,
            "provinces_id": 14,
            "city_name": "Kabupaten Kotawaringin Timur",
            "postal_code": 74364
        },
        {
            "city_id": 207,
            "provinces_id": 26,
            "city_name": "Kabupaten Kuantan Singingi",
            "postal_code": 29519
        },
        {
            "city_id": 208,
            "provinces_id": 12,
            "city_name": "Kabupaten Kubu Raya",
            "postal_code": 78311
        },
        {
            "city_id": 209,
            "provinces_id": 10,
            "city_name": "Kabupaten Kudus",
            "postal_code": 59311
        },
        {
            "city_id": 210,
            "provinces_id": 5,
            "city_name": "Kabupaten Kulon Progo",
            "postal_code": 55611
        },
        {
            "city_id": 211,
            "provinces_id": 9,
            "city_name": "Kabupaten Kuningan",
            "postal_code": 45511
        },
        {
            "city_id": 212,
            "provinces_id": 23,
            "city_name": "Kabupaten Kupang",
            "postal_code": 85362
        },
        {
            "city_id": 213,
            "provinces_id": 23,
            "city_name": "Kota Kupang",
            "postal_code": 85119
        },
        {
            "city_id": 214,
            "provinces_id": 15,
            "city_name": "Kabupaten Kutai Barat",
            "postal_code": 75711
        },
        {
            "city_id": 215,
            "provinces_id": 15,
            "city_name": "Kabupaten Kutai Kartanegara",
            "postal_code": 75511
        },
        {
            "city_id": 216,
            "provinces_id": 15,
            "city_name": "Kabupaten Kutai Timur",
            "postal_code": 75611
        },
        {
            "city_id": 217,
            "provinces_id": 34,
            "city_name": "Kabupaten Labuhan Batu",
            "postal_code": 21412
        },
        {
            "city_id": 218,
            "provinces_id": 34,
            "city_name": "Kabupaten Labuhan Batu Selatan",
            "postal_code": 21511
        },
        {
            "city_id": 219,
            "provinces_id": 34,
            "city_name": "Kabupaten Labuhan Batu Utara",
            "postal_code": 21711
        },
        {
            "city_id": 220,
            "provinces_id": 33,
            "city_name": "Kabupaten Lahat",
            "postal_code": 31419
        },
        {
            "city_id": 221,
            "provinces_id": 14,
            "city_name": "Kabupaten Lamandau",
            "postal_code": 74611
        },
        {
            "city_id": 222,
            "provinces_id": 11,
            "city_name": "Kabupaten Lamongan",
            "postal_code": 64125
        },
        {
            "city_id": 223,
            "provinces_id": 18,
            "city_name": "Kabupaten Lampung Barat",
            "postal_code": 34814
        },
        {
            "city_id": 224,
            "provinces_id": 18,
            "city_name": "Kabupaten Lampung Selatan",
            "postal_code": 35511
        },
        {
            "city_id": 225,
            "provinces_id": 18,
            "city_name": "Kabupaten Lampung Tengah",
            "postal_code": 34212
        },
        {
            "city_id": 226,
            "provinces_id": 18,
            "city_name": "Kabupaten Lampung Timur",
            "postal_code": 34319
        },
        {
            "city_id": 227,
            "provinces_id": 18,
            "city_name": "Kabupaten Lampung Utara",
            "postal_code": 34516
        },
        {
            "city_id": 228,
            "provinces_id": 12,
            "city_name": "Kabupaten Landak",
            "postal_code": 78319
        },
        {
            "city_id": 229,
            "provinces_id": 34,
            "city_name": "Kabupaten Langkat",
            "postal_code": 20811
        },
        {
            "city_id": 230,
            "provinces_id": 21,
            "city_name": "Kota Langsa",
            "postal_code": 24412
        },
        {
            "city_id": 231,
            "provinces_id": 24,
            "city_name": "Kabupaten Lanny Jaya",
            "postal_code": 99531
        },
        {
            "city_id": 232,
            "provinces_id": 3,
            "city_name": "Kabupaten Lebak",
            "postal_code": 42319
        },
        {
            "city_id": 233,
            "provinces_id": 4,
            "city_name": "Kabupaten Lebong",
            "postal_code": 39264
        },
        {
            "city_id": 234,
            "provinces_id": 23,
            "city_name": "Kabupaten Lembata",
            "postal_code": 86611
        },
        {
            "city_id": 235,
            "provinces_id": 21,
            "city_name": "Kota Lhokseumawe",
            "postal_code": 24352
        },
        {
            "city_id": 236,
            "provinces_id": 32,
            "city_name": "Kabupaten Lima Puluh Koto/Kota",
            "postal_code": 26671
        },
        {
            "city_id": 237,
            "provinces_id": 17,
            "city_name": "Kabupaten Lingga",
            "postal_code": 29811
        },
        {
            "city_id": 238,
            "provinces_id": 22,
            "city_name": "Kabupaten Lombok Barat",
            "postal_code": 83311
        },
        {
            "city_id": 239,
            "provinces_id": 22,
            "city_name": "Kabupaten Lombok Tengah",
            "postal_code": 83511
        },
        {
            "city_id": 240,
            "provinces_id": 22,
            "city_name": "Kabupaten Lombok Timur",
            "postal_code": 83612
        },
        {
            "city_id": 241,
            "provinces_id": 22,
            "city_name": "Kabupaten Lombok Utara",
            "postal_code": 83711
        },
        {
            "city_id": 242,
            "provinces_id": 33,
            "city_name": "Kota Lubuk Linggau",
            "postal_code": 31614
        },
        {
            "city_id": 243,
            "provinces_id": 11,
            "city_name": "Kabupaten Lumajang",
            "postal_code": 67319
        },
        {
            "city_id": 244,
            "provinces_id": 28,
            "city_name": "Kabupaten Luwu",
            "postal_code": 91994
        },
        {
            "city_id": 245,
            "provinces_id": 28,
            "city_name": "Kabupaten Luwu Timur",
            "postal_code": 92981
        },
        {
            "city_id": 246,
            "provinces_id": 28,
            "city_name": "Kabupaten Luwu Utara",
            "postal_code": 92911
        },
        {
            "city_id": 247,
            "provinces_id": 11,
            "city_name": "Kabupaten Madiun",
            "postal_code": 63153
        },
        {
            "city_id": 248,
            "provinces_id": 11,
            "city_name": "Kota Madiun",
            "postal_code": 63122
        },
        {
            "city_id": 249,
            "provinces_id": 10,
            "city_name": "Kabupaten Magelang",
            "postal_code": 56519
        },
        {
            "city_id": 250,
            "provinces_id": 10,
            "city_name": "Kota Magelang",
            "postal_code": 56133
        },
        {
            "city_id": 251,
            "provinces_id": 11,
            "city_name": "Kabupaten Magetan",
            "postal_code": 63314
        },
        {
            "city_id": 252,
            "provinces_id": 9,
            "city_name": "Kabupaten Majalengka",
            "postal_code": 45412
        },
        {
            "city_id": 253,
            "provinces_id": 27,
            "city_name": "Kabupaten Majene",
            "postal_code": 91411
        },
        {
            "city_id": 254,
            "provinces_id": 28,
            "city_name": "Kota Makassar",
            "postal_code": 90111
        },
        {
            "city_id": 255,
            "provinces_id": 11,
            "city_name": "Kabupaten Malang",
            "postal_code": 65163
        },
        {
            "city_id": 256,
            "provinces_id": 11,
            "city_name": "Kota Malang",
            "postal_code": 65112
        },
        {
            "city_id": 257,
            "provinces_id": 16,
            "city_name": "Kabupaten Malinau",
            "postal_code": 77511
        },
        {
            "city_id": 258,
            "provinces_id": 19,
            "city_name": "Kabupaten Maluku Barat Daya",
            "postal_code": 97451
        },
        {
            "city_id": 259,
            "provinces_id": 19,
            "city_name": "Kabupaten Maluku Tengah",
            "postal_code": 97513
        },
        {
            "city_id": 260,
            "provinces_id": 19,
            "city_name": "Kabupaten Maluku Tenggara",
            "postal_code": 97651
        },
        {
            "city_id": 261,
            "provinces_id": 19,
            "city_name": "Kabupaten Maluku Tenggara Barat",
            "postal_code": 97465
        },
        {
            "city_id": 262,
            "provinces_id": 27,
            "city_name": "Kabupaten Mamasa",
            "postal_code": 91362
        },
        {
            "city_id": 263,
            "provinces_id": 24,
            "city_name": "Kabupaten Mamberamo Raya",
            "postal_code": 99381
        },
        {
            "city_id": 264,
            "provinces_id": 24,
            "city_name": "Kabupaten Mamberamo Tengah",
            "postal_code": 99553
        },
        {
            "city_id": 265,
            "provinces_id": 27,
            "city_name": "Kabupaten Mamuju",
            "postal_code": 91519
        },
        {
            "city_id": 266,
            "provinces_id": 27,
            "city_name": "Kabupaten Mamuju Utara",
            "postal_code": 91571
        },
        {
            "city_id": 267,
            "provinces_id": 31,
            "city_name": "Kota Manado",
            "postal_code": 95247
        },
        {
            "city_id": 268,
            "provinces_id": 34,
            "city_name": "Kabupaten Mandailing Natal",
            "postal_code": 22916
        },
        {
            "city_id": 269,
            "provinces_id": 23,
            "city_name": "Kabupaten Manggarai",
            "postal_code": 86551
        },
        {
            "city_id": 270,
            "provinces_id": 23,
            "city_name": "Kabupaten Manggarai Barat",
            "postal_code": 86711
        },
        {
            "city_id": 271,
            "provinces_id": 23,
            "city_name": "Kabupaten Manggarai Timur",
            "postal_code": 86811
        },
        {
            "city_id": 272,
            "provinces_id": 25,
            "city_name": "Kabupaten Manokwari",
            "postal_code": 98311
        },
        {
            "city_id": 273,
            "provinces_id": 25,
            "city_name": "Kabupaten Manokwari Selatan",
            "postal_code": 98355
        },
        {
            "city_id": 274,
            "provinces_id": 24,
            "city_name": "Kabupaten Mappi",
            "postal_code": 99853
        },
        {
            "city_id": 275,
            "provinces_id": 28,
            "city_name": "Kabupaten Maros",
            "postal_code": 90511
        },
        {
            "city_id": 276,
            "provinces_id": 22,
            "city_name": "Kota Mataram",
            "postal_code": 83131
        },
        {
            "city_id": 277,
            "provinces_id": 25,
            "city_name": "Kabupaten Maybrat",
            "postal_code": 98051
        },
        {
            "city_id": 278,
            "provinces_id": 34,
            "city_name": "Kota Medan",
            "postal_code": 20228
        },
        {
            "city_id": 279,
            "provinces_id": 12,
            "city_name": "Kabupaten Melawi",
            "postal_code": 78619
        },
        {
            "city_id": 280,
            "provinces_id": 8,
            "city_name": "Kabupaten Merangin",
            "postal_code": 37319
        },
        {
            "city_id": 281,
            "provinces_id": 24,
            "city_name": "Kabupaten Merauke",
            "postal_code": 99613
        },
        {
            "city_id": 282,
            "provinces_id": 18,
            "city_name": "Kabupaten Mesuji",
            "postal_code": 34911
        },
        {
            "city_id": 283,
            "provinces_id": 18,
            "city_name": "Kota Metro",
            "postal_code": 34111
        },
        {
            "city_id": 284,
            "provinces_id": 24,
            "city_name": "Kabupaten Mimika",
            "postal_code": 99962
        },
        {
            "city_id": 285,
            "provinces_id": 31,
            "city_name": "Kabupaten Minahasa",
            "postal_code": 95614
        },
        {
            "city_id": 286,
            "provinces_id": 31,
            "city_name": "Kabupaten Minahasa Selatan",
            "postal_code": 95914
        },
        {
            "city_id": 287,
            "provinces_id": 31,
            "city_name": "Kabupaten Minahasa Tenggara",
            "postal_code": 95995
        },
        {
            "city_id": 288,
            "provinces_id": 31,
            "city_name": "Kabupaten Minahasa Utara",
            "postal_code": 95316
        },
        {
            "city_id": 289,
            "provinces_id": 11,
            "city_name": "Kabupaten Mojokerto",
            "postal_code": 61382
        },
        {
            "city_id": 290,
            "provinces_id": 11,
            "city_name": "Kota Mojokerto",
            "postal_code": 61316
        },
        {
            "city_id": 291,
            "provinces_id": 29,
            "city_name": "Kabupaten Morowali",
            "postal_code": 94911
        },
        {
            "city_id": 292,
            "provinces_id": 33,
            "city_name": "Kabupaten Muara Enim",
            "postal_code": 31315
        },
        {
            "city_id": 293,
            "provinces_id": 8,
            "city_name": "Kabupaten Muaro Jambi",
            "postal_code": 36311
        },
        {
            "city_id": 294,
            "provinces_id": 4,
            "city_name": "Kabupaten Muko Muko",
            "postal_code": 38715
        },
        {
            "city_id": 295,
            "provinces_id": 30,
            "city_name": "Kabupaten Muna",
            "postal_code": 93611
        },
        {
            "city_id": 296,
            "provinces_id": 14,
            "city_name": "Kabupaten Murung Raya",
            "postal_code": 73911
        },
        {
            "city_id": 297,
            "provinces_id": 33,
            "city_name": "Kabupaten Musi Banyuasin",
            "postal_code": 30719
        },
        {
            "city_id": 298,
            "provinces_id": 33,
            "city_name": "Kabupaten Musi Rawas",
            "postal_code": 31661
        },
        {
            "city_id": 299,
            "provinces_id": 24,
            "city_name": "Kabupaten Nabire",
            "postal_code": 98816
        },
        {
            "city_id": 300,
            "provinces_id": 21,
            "city_name": "Kabupaten Nagan Raya",
            "postal_code": 23674
        },
        {
            "city_id": 301,
            "provinces_id": 23,
            "city_name": "Kabupaten Nagekeo",
            "postal_code": 86911
        },
        {
            "city_id": 302,
            "provinces_id": 17,
            "city_name": "Kabupaten Natuna",
            "postal_code": 29711
        },
        {
            "city_id": 303,
            "provinces_id": 24,
            "city_name": "Kabupaten Nduga",
            "postal_code": 99541
        },
        {
            "city_id": 304,
            "provinces_id": 23,
            "city_name": "Kabupaten Ngada",
            "postal_code": 86413
        },
        {
            "city_id": 305,
            "provinces_id": 11,
            "city_name": "Kabupaten Nganjuk",
            "postal_code": 64414
        },
        {
            "city_id": 306,
            "provinces_id": 11,
            "city_name": "Kabupaten Ngawi",
            "postal_code": 63219
        },
        {
            "city_id": 307,
            "provinces_id": 34,
            "city_name": "Kabupaten Nias",
            "postal_code": 22876
        },
        {
            "city_id": 308,
            "provinces_id": 34,
            "city_name": "Kabupaten Nias Barat",
            "postal_code": 22895
        },
        {
            "city_id": 309,
            "provinces_id": 34,
            "city_name": "Kabupaten Nias Selatan",
            "postal_code": 22865
        },
        {
            "city_id": 310,
            "provinces_id": 34,
            "city_name": "Kabupaten Nias Utara",
            "postal_code": 22856
        },
        {
            "city_id": 311,
            "provinces_id": 16,
            "city_name": "Kabupaten Nunukan",
            "postal_code": 77421
        },
        {
            "city_id": 312,
            "provinces_id": 33,
            "city_name": "Kabupaten Ogan Ilir",
            "postal_code": 30811
        },
        {
            "city_id": 313,
            "provinces_id": 33,
            "city_name": "Kabupaten Ogan Komering Ilir",
            "postal_code": 30618
        },
        {
            "city_id": 314,
            "provinces_id": 33,
            "city_name": "Kabupaten Ogan Komering Ulu",
            "postal_code": 32112
        },
        {
            "city_id": 315,
            "provinces_id": 33,
            "city_name": "Kabupaten Ogan Komering Ulu Selatan",
            "postal_code": 32211
        },
        {
            "city_id": 316,
            "provinces_id": 33,
            "city_name": "Kabupaten Ogan Komering Ulu Timur",
            "postal_code": 32312
        },
        {
            "city_id": 317,
            "provinces_id": 11,
            "city_name": "Kabupaten Pacitan",
            "postal_code": 63512
        },
        {
            "city_id": 318,
            "provinces_id": 32,
            "city_name": "Kota Padang",
            "postal_code": 25112
        },
        {
            "city_id": 319,
            "provinces_id": 34,
            "city_name": "Kabupaten Padang Lawas",
            "postal_code": 22763
        },
        {
            "city_id": 320,
            "provinces_id": 34,
            "city_name": "Kabupaten Padang Lawas Utara",
            "postal_code": 22753
        },
        {
            "city_id": 321,
            "provinces_id": 32,
            "city_name": "Kota Padang Panjang",
            "postal_code": 27122
        },
        {
            "city_id": 322,
            "provinces_id": 32,
            "city_name": "Kabupaten Padang Pariaman",
            "postal_code": 25583
        },
        {
            "city_id": 323,
            "provinces_id": 34,
            "city_name": "Kota Padang Sidempuan",
            "postal_code": 22727
        },
        {
            "city_id": 324,
            "provinces_id": 33,
            "city_name": "Kota Pagar Alam",
            "postal_code": 31512
        },
        {
            "city_id": 325,
            "provinces_id": 34,
            "city_name": "Kabupaten Pakpak Bharat",
            "postal_code": 22272
        },
        {
            "city_id": 326,
            "provinces_id": 14,
            "city_name": "Kota Palangka Raya",
            "postal_code": 73112
        },
        {
            "city_id": 327,
            "provinces_id": 33,
            "city_name": "Kota Palembang",
            "postal_code": 31512
        },
        {
            "city_id": 328,
            "provinces_id": 28,
            "city_name": "Kota Palopo",
            "postal_code": 91911
        },
        {
            "city_id": 329,
            "provinces_id": 29,
            "city_name": "Kota Palu",
            "postal_code": 94111
        },
        {
            "city_id": 330,
            "provinces_id": 11,
            "city_name": "Kabupaten Pamekasan",
            "postal_code": 69319
        },
        {
            "city_id": 331,
            "provinces_id": 3,
            "city_name": "Kabupaten Pandeglang",
            "postal_code": 42212
        },
        {
            "city_id": 332,
            "provinces_id": 9,
            "city_name": "Kabupaten Pangandaran",
            "postal_code": 46511
        },
        {
            "city_id": 333,
            "provinces_id": 28,
            "city_name": "Kabupaten Pangkajene Kepulauan",
            "postal_code": 90611
        },
        {
            "city_id": 334,
            "provinces_id": 2,
            "city_name": "Kota Pangkal Pinang",
            "postal_code": 33115
        },
        {
            "city_id": 335,
            "provinces_id": 24,
            "city_name": "Kabupaten Paniai",
            "postal_code": 98765
        },
        {
            "city_id": 336,
            "provinces_id": 28,
            "city_name": "Kota Parepare",
            "postal_code": 91123
        },
        {
            "city_id": 337,
            "provinces_id": 32,
            "city_name": "Kota Pariaman",
            "postal_code": 25511
        },
        {
            "city_id": 338,
            "provinces_id": 29,
            "city_name": "Kabupaten Parigi Moutong",
            "postal_code": 94411
        },
        {
            "city_id": 339,
            "provinces_id": 32,
            "city_name": "Kabupaten Pasaman",
            "postal_code": 26318
        },
        {
            "city_id": 340,
            "provinces_id": 32,
            "city_name": "Kabupaten Pasaman Barat",
            "postal_code": 26511
        },
        {
            "city_id": 341,
            "provinces_id": 15,
            "city_name": "Kabupaten Paser",
            "postal_code": 76211
        },
        {
            "city_id": 342,
            "provinces_id": 11,
            "city_name": "Kabupaten Pasuruan",
            "postal_code": 67153
        },
        {
            "city_id": 343,
            "provinces_id": 11,
            "city_name": "Kota Pasuruan",
            "postal_code": 67118
        },
        {
            "city_id": 344,
            "provinces_id": 10,
            "city_name": "Kabupaten Pati",
            "postal_code": 59114
        },
        {
            "city_id": 345,
            "provinces_id": 32,
            "city_name": "Kota Payakumbuh",
            "postal_code": 26213
        },
        {
            "city_id": 346,
            "provinces_id": 25,
            "city_name": "Kabupaten Pegunungan Arfak",
            "postal_code": 98354
        },
        {
            "city_id": 347,
            "provinces_id": 24,
            "city_name": "Kabupaten Pegunungan Bintang",
            "postal_code": 99573
        },
        {
            "city_id": 348,
            "provinces_id": 10,
            "city_name": "Kabupaten Pekalongan",
            "postal_code": 51161
        },
        {
            "city_id": 349,
            "provinces_id": 10,
            "city_name": "Kota Pekalongan",
            "postal_code": 51122
        },
        {
            "city_id": 350,
            "provinces_id": 26,
            "city_name": "Kota Pekanbaru",
            "postal_code": 28112
        },
        {
            "city_id": 351,
            "provinces_id": 26,
            "city_name": "Kabupaten Pelalawan",
            "postal_code": 28311
        },
        {
            "city_id": 352,
            "provinces_id": 10,
            "city_name": "Kabupaten Pemalang",
            "postal_code": 52319
        },
        {
            "city_id": 353,
            "provinces_id": 34,
            "city_name": "Kota Pematang Siantar",
            "postal_code": 21126
        },
        {
            "city_id": 354,
            "provinces_id": 15,
            "city_name": "Kabupaten Penajam Paser Utara",
            "postal_code": 76311
        },
        {
            "city_id": 355,
            "provinces_id": 18,
            "city_name": "Kabupaten Pesawaran",
            "postal_code": 35312
        },
        {
            "city_id": 356,
            "provinces_id": 18,
            "city_name": "Kabupaten Pesisir Barat",
            "postal_code": 35974
        },
        {
            "city_id": 357,
            "provinces_id": 32,
            "city_name": "Kabupaten Pesisir Selatan",
            "postal_code": 25611
        },
        {
            "city_id": 358,
            "provinces_id": 21,
            "city_name": "Kabupaten Pidie",
            "postal_code": 24116
        },
        {
            "city_id": 359,
            "provinces_id": 21,
            "city_name": "Kabupaten Pidie Jaya",
            "postal_code": 24186
        },
        {
            "city_id": 360,
            "provinces_id": 28,
            "city_name": "Kabupaten Pinrang",
            "postal_code": 91251
        },
        {
            "city_id": 361,
            "provinces_id": 7,
            "city_name": "Kabupaten Pohuwato",
            "postal_code": 96419
        },
        {
            "city_id": 362,
            "provinces_id": 27,
            "city_name": "Kabupaten Polewali Mandar",
            "postal_code": 91311
        },
        {
            "city_id": 363,
            "provinces_id": 11,
            "city_name": "Kabupaten Ponorogo",
            "postal_code": 63411
        },
        {
            "city_id": 364,
            "provinces_id": 12,
            "city_name": "Kabupaten Pontianak",
            "postal_code": 78971
        },
        {
            "city_id": 365,
            "provinces_id": 12,
            "city_name": "Kota Pontianak",
            "postal_code": 78112
        },
        {
            "city_id": 366,
            "provinces_id": 29,
            "city_name": "Kabupaten Poso",
            "postal_code": 94615
        },
        {
            "city_id": 367,
            "provinces_id": 33,
            "city_name": "Kota Prabumulih",
            "postal_code": 31121
        },
        {
            "city_id": 368,
            "provinces_id": 18,
            "city_name": "Kabupaten Pringsewu",
            "postal_code": 35719
        },
        {
            "city_id": 369,
            "provinces_id": 11,
            "city_name": "Kabupaten Probolinggo",
            "postal_code": 67282
        },
        {
            "city_id": 370,
            "provinces_id": 11,
            "city_name": "Kota Probolinggo",
            "postal_code": 67215
        },
        {
            "city_id": 371,
            "provinces_id": 14,
            "city_name": "Kabupaten Pulang Pisau",
            "postal_code": 74811
        },
        {
            "city_id": 372,
            "provinces_id": 20,
            "city_name": "Kabupaten Pulau Morotai",
            "postal_code": 97771
        },
        {
            "city_id": 373,
            "provinces_id": 24,
            "city_name": "Kabupaten Puncak",
            "postal_code": 98981
        },
        {
            "city_id": 374,
            "provinces_id": 24,
            "city_name": "Kabupaten Puncak Jaya",
            "postal_code": 98979
        },
        {
            "city_id": 375,
            "provinces_id": 10,
            "city_name": "Kabupaten Purbalingga",
            "postal_code": 53312
        },
        {
            "city_id": 376,
            "provinces_id": 9,
            "city_name": "Kabupaten Purwakarta",
            "postal_code": 41119
        },
        {
            "city_id": 377,
            "provinces_id": 10,
            "city_name": "Kabupaten Purworejo",
            "postal_code": 54111
        },
        {
            "city_id": 378,
            "provinces_id": 25,
            "city_name": "Kabupaten Raja Ampat",
            "postal_code": 98489
        },
        {
            "city_id": 379,
            "provinces_id": 4,
            "city_name": "Kabupaten Rejang Lebong",
            "postal_code": 39112
        },
        {
            "city_id": 380,
            "provinces_id": 10,
            "city_name": "Kabupaten Rembang",
            "postal_code": 59219
        },
        {
            "city_id": 381,
            "provinces_id": 26,
            "city_name": "Kabupaten Rokan Hilir",
            "postal_code": 28992
        },
        {
            "city_id": 382,
            "provinces_id": 26,
            "city_name": "Kabupaten Rokan Hulu",
            "postal_code": 28511
        },
        {
            "city_id": 383,
            "provinces_id": 23,
            "city_name": "Kabupaten Rote Ndao",
            "postal_code": 85982
        },
        {
            "city_id": 384,
            "provinces_id": 21,
            "city_name": "Kota Sabang",
            "postal_code": 23512
        },
        {
            "city_id": 385,
            "provinces_id": 23,
            "city_name": "Kabupaten Sabu Raijua",
            "postal_code": 85391
        },
        {
            "city_id": 386,
            "provinces_id": 10,
            "city_name": "Kota Salatiga",
            "postal_code": 50711
        },
        {
            "city_id": 387,
            "provinces_id": 15,
            "city_name": "Kota Samarinda",
            "postal_code": 75133
        },
        {
            "city_id": 388,
            "provinces_id": 12,
            "city_name": "Kabupaten Sambas",
            "postal_code": 79453
        },
        {
            "city_id": 389,
            "provinces_id": 34,
            "city_name": "Kabupaten Samosir",
            "postal_code": 22392
        },
        {
            "city_id": 390,
            "provinces_id": 11,
            "city_name": "Kabupaten Sampang",
            "postal_code": 69219
        },
        {
            "city_id": 391,
            "provinces_id": 12,
            "city_name": "Kabupaten Sanggau",
            "postal_code": 78557
        },
        {
            "city_id": 392,
            "provinces_id": 24,
            "city_name": "Kabupaten Sarmi",
            "postal_code": 99373
        },
        {
            "city_id": 393,
            "provinces_id": 8,
            "city_name": "Kabupaten Sarolangun",
            "postal_code": 37419
        },
        {
            "city_id": 394,
            "provinces_id": 32,
            "city_name": "Kota Sawah Lunto",
            "postal_code": 27416
        },
        {
            "city_id": 395,
            "provinces_id": 12,
            "city_name": "Kabupaten Sekadau",
            "postal_code": 79583
        },
        {
            "city_id": 396,
            "provinces_id": 28,
            "city_name": "Kabupaten Selayar (Kepulauan Selayar)",
            "postal_code": 92812
        },
        {
            "city_id": 397,
            "provinces_id": 4,
            "city_name": "Kabupaten Seluma",
            "postal_code": 38811
        },
        {
            "city_id": 398,
            "provinces_id": 10,
            "city_name": "Kabupaten Semarang",
            "postal_code": 50511
        },
        {
            "city_id": 399,
            "provinces_id": 10,
            "city_name": "Kota Semarang",
            "postal_code": 50135
        },
        {
            "city_id": 400,
            "provinces_id": 19,
            "city_name": "Kabupaten Seram Bagian Barat",
            "postal_code": 97561
        },
        {
            "city_id": 401,
            "provinces_id": 19,
            "city_name": "Kabupaten Seram Bagian Timur",
            "postal_code": 97581
        },
        {
            "city_id": 402,
            "provinces_id": 3,
            "city_name": "Kabupaten Serang",
            "postal_code": 42182
        },
        {
            "city_id": 403,
            "provinces_id": 3,
            "city_name": "Kota Serang",
            "postal_code": 42111
        },
        {
            "city_id": 404,
            "provinces_id": 34,
            "city_name": "Kabupaten Serdang Bedagai",
            "postal_code": 20915
        },
        {
            "city_id": 405,
            "provinces_id": 14,
            "city_name": "Kabupaten Seruyan",
            "postal_code": 74211
        },
        {
            "city_id": 406,
            "provinces_id": 26,
            "city_name": "Kabupaten Siak",
            "postal_code": 28623
        },
        {
            "city_id": 407,
            "provinces_id": 34,
            "city_name": "Kota Sibolga",
            "postal_code": 22522
        },
        {
            "city_id": 408,
            "provinces_id": 28,
            "city_name": "Kabupaten Sidenreng Rappang/Rapang",
            "postal_code": 91613
        },
        {
            "city_id": 409,
            "provinces_id": 11,
            "city_name": "Kabupaten Sidoarjo",
            "postal_code": 61219
        },
        {
            "city_id": 410,
            "provinces_id": 29,
            "city_name": "Kabupaten Sigi",
            "postal_code": 94364
        },
        {
            "city_id": 411,
            "provinces_id": 32,
            "city_name": "Kabupaten Sijunjung (Sawah Lunto Sijunjung)",
            "postal_code": 27511
        },
        {
            "city_id": 412,
            "provinces_id": 23,
            "city_name": "Kabupaten Sikka",
            "postal_code": 86121
        },
        {
            "city_id": 413,
            "provinces_id": 34,
            "city_name": "Kabupaten Simalungun",
            "postal_code": 21162
        },
        {
            "city_id": 414,
            "provinces_id": 21,
            "city_name": "Kabupaten Simeulue",
            "postal_code": 23891
        },
        {
            "city_id": 415,
            "provinces_id": 12,
            "city_name": "Kota Singkawang",
            "postal_code": 79117
        },
        {
            "city_id": 416,
            "provinces_id": 28,
            "city_name": "Kabupaten Sinjai",
            "postal_code": 92615
        },
        {
            "city_id": 417,
            "provinces_id": 12,
            "city_name": "Kabupaten Sintang",
            "postal_code": 78619
        },
        {
            "city_id": 418,
            "provinces_id": 11,
            "city_name": "Kabupaten Situbondo",
            "postal_code": 68316
        },
        {
            "city_id": 419,
            "provinces_id": 5,
            "city_name": "Kabupaten Sleman",
            "postal_code": 55513
        },
        {
            "city_id": 420,
            "provinces_id": 32,
            "city_name": "Kabupaten Solok",
            "postal_code": 27365
        },
        {
            "city_id": 421,
            "provinces_id": 32,
            "city_name": "Kota Solok",
            "postal_code": 27315
        },
        {
            "city_id": 422,
            "provinces_id": 32,
            "city_name": "Kabupaten Solok Selatan",
            "postal_code": 27779
        },
        {
            "city_id": 423,
            "provinces_id": 28,
            "city_name": "Kabupaten Soppeng",
            "postal_code": 90812
        },
        {
            "city_id": 424,
            "provinces_id": 25,
            "city_name": "Kabupaten Sorong",
            "postal_code": 98431
        },
        {
            "city_id": 425,
            "provinces_id": 25,
            "city_name": "Kota Sorong",
            "postal_code": 98411
        },
        {
            "city_id": 426,
            "provinces_id": 25,
            "city_name": "Kabupaten Sorong Selatan",
            "postal_code": 98454
        },
        {
            "city_id": 427,
            "provinces_id": 10,
            "city_name": "Kabupaten Sragen",
            "postal_code": 57211
        },
        {
            "city_id": 428,
            "provinces_id": 9,
            "city_name": "Kabupaten Subang",
            "postal_code": 41215
        },
        {
            "city_id": 429,
            "provinces_id": 21,
            "city_name": "Kota Subulussalam",
            "postal_code": 24882
        },
        {
            "city_id": 430,
            "provinces_id": 9,
            "city_name": "Kabupaten Sukabumi",
            "postal_code": 43311
        },
        {
            "city_id": 431,
            "provinces_id": 9,
            "city_name": "Kota Sukabumi",
            "postal_code": 43114
        },
        {
            "city_id": 432,
            "provinces_id": 14,
            "city_name": "Kabupaten Sukamara",
            "postal_code": 74712
        },
        {
            "city_id": 433,
            "provinces_id": 10,
            "city_name": "Kabupaten Sukoharjo",
            "postal_code": 57514
        },
        {
            "city_id": 434,
            "provinces_id": 23,
            "city_name": "Kabupaten Sumba Barat",
            "postal_code": 87219
        },
        {
            "city_id": 435,
            "provinces_id": 23,
            "city_name": "Kabupaten Sumba Barat Daya",
            "postal_code": 87453
        },
        {
            "city_id": 436,
            "provinces_id": 23,
            "city_name": "Kabupaten Sumba Tengah",
            "postal_code": 87358
        },
        {
            "city_id": 437,
            "provinces_id": 23,
            "city_name": "Kabupaten Sumba Timur",
            "postal_code": 87112
        },
        {
            "city_id": 438,
            "provinces_id": 22,
            "city_name": "Kabupaten Sumbawa",
            "postal_code": 84315
        },
        {
            "city_id": 439,
            "provinces_id": 22,
            "city_name": "Kabupaten Sumbawa Barat",
            "postal_code": 84419
        },
        {
            "city_id": 440,
            "provinces_id": 9,
            "city_name": "Kabupaten Sumedang",
            "postal_code": 45326
        },
        {
            "city_id": 441,
            "provinces_id": 11,
            "city_name": "Kabupaten Sumenep",
            "postal_code": 69413
        },
        {
            "city_id": 442,
            "provinces_id": 8,
            "city_name": "Kota Sungaipenuh",
            "postal_code": 37113
        },
        {
            "city_id": 443,
            "provinces_id": 24,
            "city_name": "Kabupaten Supiori",
            "postal_code": 98164
        },
        {
            "city_id": 444,
            "provinces_id": 11,
            "city_name": "Kota Surabaya",
            "postal_code": 60119
        },
        {
            "city_id": 445,
            "provinces_id": 10,
            "city_name": "Kota Surakarta (Solo)",
            "postal_code": 57113
        },
        {
            "city_id": 446,
            "provinces_id": 13,
            "city_name": "Kabupaten Tabalong",
            "postal_code": 71513
        },
        {
            "city_id": 447,
            "provinces_id": 1,
            "city_name": "Kabupaten Tabanan",
            "postal_code": 82119
        },
        {
            "city_id": 448,
            "provinces_id": 28,
            "city_name": "Kabupaten Takalar",
            "postal_code": 92212
        },
        {
            "city_id": 449,
            "provinces_id": 25,
            "city_name": "Kabupaten Tambrauw",
            "postal_code": 98475
        },
        {
            "city_id": 450,
            "provinces_id": 16,
            "city_name": "Kabupaten Tana Tidung",
            "postal_code": 77611
        },
        {
            "city_id": 451,
            "provinces_id": 28,
            "city_name": "Kabupaten Tana Toraja",
            "postal_code": 91819
        },
        {
            "city_id": 452,
            "provinces_id": 13,
            "city_name": "Kabupaten Tanah Bumbu",
            "postal_code": 72211
        },
        {
            "city_id": 453,
            "provinces_id": 32,
            "city_name": "Kabupaten Tanah Datar",
            "postal_code": 27211
        },
        {
            "city_id": 454,
            "provinces_id": 13,
            "city_name": "Kabupaten Tanah Laut",
            "postal_code": 70811
        },
        {
            "city_id": 455,
            "provinces_id": 3,
            "city_name": "Kabupaten Tangerang",
            "postal_code": 15914
        },
        {
            "city_id": 456,
            "provinces_id": 3,
            "city_name": "Kota Tangerang",
            "postal_code": 15111
        },
        {
            "city_id": 457,
            "provinces_id": 3,
            "city_name": "Kota Tangerang Selatan",
            "postal_code": 15332
        },
        {
            "city_id": 458,
            "provinces_id": 18,
            "city_name": "Kabupaten Tanggamus",
            "postal_code": 35619
        },
        {
            "city_id": 459,
            "provinces_id": 34,
            "city_name": "Kota Tanjung Balai",
            "postal_code": 21321
        },
        {
            "city_id": 460,
            "provinces_id": 8,
            "city_name": "Kabupaten Tanjung Jabung Barat",
            "postal_code": 36513
        },
        {
            "city_id": 461,
            "provinces_id": 8,
            "city_name": "Kabupaten Tanjung Jabung Timur",
            "postal_code": 36719
        },
        {
            "city_id": 462,
            "provinces_id": 17,
            "city_name": "Kota Tanjung Pinang",
            "postal_code": 29111
        },
        {
            "city_id": 463,
            "provinces_id": 34,
            "city_name": "Kabupaten Tapanuli Selatan",
            "postal_code": 22742
        },
        {
            "city_id": 464,
            "provinces_id": 34,
            "city_name": "Kabupaten Tapanuli Tengah",
            "postal_code": 22611
        },
        {
            "city_id": 465,
            "provinces_id": 34,
            "city_name": "Kabupaten Tapanuli Utara",
            "postal_code": 22414
        },
        {
            "city_id": 466,
            "provinces_id": 13,
            "city_name": "Kabupaten Tapin",
            "postal_code": 71119
        },
        {
            "city_id": 467,
            "provinces_id": 16,
            "city_name": "Kota Tarakan",
            "postal_code": 77114
        },
        {
            "city_id": 468,
            "provinces_id": 9,
            "city_name": "Kabupaten Tasikmalaya",
            "postal_code": 46411
        },
        {
            "city_id": 469,
            "provinces_id": 9,
            "city_name": "Kota Tasikmalaya",
            "postal_code": 46116
        },
        {
            "city_id": 470,
            "provinces_id": 34,
            "city_name": "Kota Tebing Tinggi",
            "postal_code": 20632
        },
        {
            "city_id": 471,
            "provinces_id": 8,
            "city_name": "Kabupaten Tebo",
            "postal_code": 37519
        },
        {
            "city_id": 472,
            "provinces_id": 10,
            "city_name": "Kabupaten Tegal",
            "postal_code": 52419
        },
        {
            "city_id": 473,
            "provinces_id": 10,
            "city_name": "Kota Tegal",
            "postal_code": 52114
        },
        {
            "city_id": 474,
            "provinces_id": 25,
            "city_name": "Kabupaten Teluk Bintuni",
            "postal_code": 98551
        },
        {
            "city_id": 475,
            "provinces_id": 25,
            "city_name": "Kabupaten Teluk Wondama",
            "postal_code": 98591
        },
        {
            "city_id": 476,
            "provinces_id": 10,
            "city_name": "Kabupaten Temanggung",
            "postal_code": 56212
        },
        {
            "city_id": 477,
            "provinces_id": 20,
            "city_name": "Kota Ternate",
            "postal_code": 97714
        },
        {
            "city_id": 478,
            "provinces_id": 20,
            "city_name": "Kota Tidore Kepulauan",
            "postal_code": 97815
        },
        {
            "city_id": 479,
            "provinces_id": 23,
            "city_name": "Kabupaten Timor Tengah Selatan",
            "postal_code": 85562
        },
        {
            "city_id": 480,
            "provinces_id": 23,
            "city_name": "Kabupaten Timor Tengah Utara",
            "postal_code": 85612
        },
        {
            "city_id": 481,
            "provinces_id": 34,
            "city_name": "Kabupaten Toba Samosir",
            "postal_code": 22316
        },
        {
            "city_id": 482,
            "provinces_id": 29,
            "city_name": "Kabupaten Tojo Una-Una",
            "postal_code": 94683
        },
        {
            "city_id": 483,
            "provinces_id": 29,
            "city_name": "Kabupaten Toli-Toli",
            "postal_code": 94542
        },
        {
            "city_id": 484,
            "provinces_id": 24,
            "city_name": "Kabupaten Tolikara",
            "postal_code": 99411
        },
        {
            "city_id": 485,
            "provinces_id": 31,
            "city_name": "Kota Tomohon",
            "postal_code": 95416
        },
        {
            "city_id": 486,
            "provinces_id": 28,
            "city_name": "Kabupaten Toraja Utara",
            "postal_code": 91831
        },
        {
            "city_id": 487,
            "provinces_id": 11,
            "city_name": "Kabupaten Trenggalek",
            "postal_code": 66312
        },
        {
            "city_id": 488,
            "provinces_id": 19,
            "city_name": "Kota Tual",
            "postal_code": 97612
        },
        {
            "city_id": 489,
            "provinces_id": 11,
            "city_name": "Kabupaten Tuban",
            "postal_code": 62319
        },
        {
            "city_id": 490,
            "provinces_id": 18,
            "city_name": "Kabupaten Tulang Bawang",
            "postal_code": 34613
        },
        {
            "city_id": 491,
            "provinces_id": 18,
            "city_name": "Kabupaten Tulang Bawang Barat",
            "postal_code": 34419
        },
        {
            "city_id": 492,
            "provinces_id": 11,
            "city_name": "Kabupaten Tulungagung",
            "postal_code": 66212
        },
        {
            "city_id": 493,
            "provinces_id": 28,
            "city_name": "Kabupaten Wajo",
            "postal_code": 90911
        },
        {
            "city_id": 494,
            "provinces_id": 30,
            "city_name": "Kabupaten Wakatobi",
            "postal_code": 93791
        },
        {
            "city_id": 495,
            "provinces_id": 24,
            "city_name": "Kabupaten Waropen",
            "postal_code": 98269
        },
        {
            "city_id": 496,
            "provinces_id": 18,
            "city_name": "Kabupaten Way Kanan",
            "postal_code": 34711
        },
        {
            "city_id": 497,
            "provinces_id": 10,
            "city_name": "Kabupaten Wonogiri",
            "postal_code": 57619
        },
        {
            "city_id": 498,
            "provinces_id": 10,
            "city_name": "Kabupaten Wonosobo",
            "postal_code": 56311
        },
        {
            "city_id": 499,
            "provinces_id": 24,
            "city_name": "Kabupaten Yahukimo",
            "postal_code": 99041
        },
        {
            "city_id": 500,
            "provinces_id": 24,
            "city_name": "Kabupaten Yalimo",
            "postal_code": 99481
        },
        {
            "city_id": 501,
            "provinces_id": 5,
            "city_name": "Kota Yogyakarta",
            "postal_code": 55222
        }
    ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("tb_ro_cities", null, {});
  },
};
