-- Câu 1:
SELECT khach_hang.makh, khach_hang.tenkh, khach_hang.diachi, khach_hang.sodt
FROM
    khach_hang
JOIN
    dat_phong
ON khach_hang.makh = dat_phong.makh
WHERE khach_hang.diachi = 'Hoa xuan';



-- Câu 2:
SELECT phong.maphong, loaiphong, sokhachtoida, giaphong
FROM phong
JOIN dat_phong
ON dat_phong.maphong = phong.maphong
WHERE dat_phong.trangthaidat = 'Da dat';



-- Câu 3:
SELECT tenkh
FROM khach_hang
WHERE
    (khach_hang.tenkh LIKE 'H%' OR khach_hang.tenkh LIKE 'N%' OR khach_hang.tenkh LIKE 'M%' )
    AND length(khach_hang.tenkh) <= 20;


-- Câu 4;
SELECT DISTINCT tenkh
FROM khach_hang;


-- Câu 5:
SELECT *
FROM dich_vu_di_kem
WHERE (donvitinh = 'lon' AND dongia > 10000) OR (donvitinh = 'cai' AND dongia < 5000);


-- Câu 6:
SELECT
    dp.madatphong, dp.maphong,
    p.loaiphong, p.sokhachtoida,
    dp.makh, khach_hang.tenkh,
    khach_hang.sodt, dp.ngaydat,
    dp.giobatdau, dp.gioketthuc,
     dv.madv, ct.soluong, dv.dongia
FROM
    dat_phong as dp
JOIN
    phong as p
ON
    dp.maphong = p.maphong
JOIN
    khach_hang
ON
    dp.makh = khach_hang.makh
JOIN
    chi_tiet_su_dung_dv as ct
ON
    ct.madatphong= dp.madatphong
JOIN
    dich_vu_di_kem as dv
ON
    dv.madv = ct.madv
WHERE
    EXTRACT(YEAR FROM dp.NgayDat) IN (2016, 2017)
    AND p.GiaPhong > 50000;
