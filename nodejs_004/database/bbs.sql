-- % : 어디세어나 접근가능
CREATE USER 'node'@'%'
IDENTIFIED BY '12345';

-- 모든 권한 부여
GRANT ALL PRIVILEGES ON *.*
TO 'node'@'%';

CREATE DATABASE nodeDB;
USE nodeDB;
DESC tbl_bbs;
DROP TABLE tbl_bbs;
drop table tbl_replies;
