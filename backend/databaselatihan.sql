--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-04-21 15:15:31

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 16397)
-- Name: tabellatihan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tabellatihan (
    nama character varying(75) NOT NULL,
    id integer NOT NULL,
    keterangan character varying
);


ALTER TABLE public.tabellatihan OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16395)
-- Name: tabellatihan_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tabellatihan_id_seq
    AS integer
    START WITH 4
    INCREMENT BY 1
    MINVALUE 4
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tabellatihan_id_seq OWNER TO postgres;

--
-- TOC entry 2991 (class 0 OID 0)
-- Dependencies: 200
-- Name: tabellatihan_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tabellatihan_id_seq OWNED BY public.tabellatihan.id;


--
-- TOC entry 2851 (class 2604 OID 16400)
-- Name: tabellatihan id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tabellatihan ALTER COLUMN id SET DEFAULT nextval('public.tabellatihan_id_seq'::regclass);


--
-- TOC entry 2985 (class 0 OID 16397)
-- Dependencies: 201
-- Data for Name: tabellatihan; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tabellatihan (nama, id, keterangan) FROM stdin;
Haem	1	Mahasiswa 1
Juned\n	2	Mahasiswa 2
Tiara\n	3	Mahasiswa 3
Gani	10	Mahasiswa
Gani	11	Mahasiswa
Andri	17	Mahasiswa
Ilham	18	Mahasiswa
Haem	19	\N
haem	20	mahasisswa
Haem	21	Mahasiswa
Haem	22	Mahasiswa 21
Haem	23	Mahasiswa 21
Haem	24	Mahasiswa 22
Andri	25	Siswa
Andri	26	Siswa
Haem	27	Mahasiswa
\.


--
-- TOC entry 2992 (class 0 OID 0)
-- Dependencies: 200
-- Name: tabellatihan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tabellatihan_id_seq', 27, true);


--
-- TOC entry 2853 (class 2606 OID 16405)
-- Name: tabellatihan tabellatihan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tabellatihan
    ADD CONSTRAINT tabellatihan_pkey PRIMARY KEY (id);


-- Completed on 2021-04-21 15:15:32

--
-- PostgreSQL database dump complete
--

