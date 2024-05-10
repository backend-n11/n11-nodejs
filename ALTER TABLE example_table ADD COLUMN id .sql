ALTER TABLE example_table ADD COLUMN id SERIAL PRIMARY KEY;
-- ushbu so'rov bizga bazamizda mavjud bo'lgan table ga o'zgartirish kiritishda yordam beradi.
-- Bizda example_table nomli jadval bor  va unga SERIAL PRIMARY KEY qilib column qo'shayapmiz.

ALTER TABLE example_table RENAME TO example;
-- ushbu so'rov bizga example_table nomli jadval nomini example ga o'zgartirib berish uchun xizmat qiladi.

ALTER TABLE example_table RENAME phone TO phone_number;
-- bu so'rov bizga jadvaldagi phone column nomini phone_number ga o'zgartirib beradi.

ALTER TABLE example_table ALTER COLUMN TYPE VARCHAR(60);

-- bu so'rov example_table jadvalidagi columnning turini o'zgartirishda yordam beradi.
-- Agar columnning turi INT, VARCHAR yoki boshqa turda bo'lsa uni VARCHAR(60) ga o'zgartirib beradi.

ALTER TABLE example_table ALTER COLUMN phone_number SET NOT NULL;
-- bu so'rov jadvaldagi phone_number ga NOT NULL turini qo'shib beradi.

ALTER TABLE example_table DROP COLUMN nickname;
-- bu so'rov jadvaldan nickname columinini o'chirib beradi.

ALTER TABLE example_table ADD COLUMN profession_id INT REFERENCES profession(id);
-- ushbu so'rov bizga proffession jadvalidagi id ga qarashli profession_id nomli columnni jadvalga qo'shib beradi.