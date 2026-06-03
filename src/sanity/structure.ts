import type { StructureResolver } from "sanity/structure";
import {
  CogIcon,
  RocketIcon,
  TrendUpwardIcon,
  ThLargeIcon,
  CaseIcon,
  ClipboardIcon,
  CommentIcon,
  UsersIcon,
  UserIcon,
  HelpCircleIcon,
} from "@sanity/icons";

// Singleton: siteSettings & hero hanya boleh ada satu dokumen.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Konten MRK")
    .items([
      S.listItem()
        .title("Pengaturan Situs")
        .icon(CogIcon)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.listItem()
        .title("Hero")
        .icon(RocketIcon)
        .child(S.document().schemaType("hero").documentId("hero")),
      S.divider(),
      S.documentTypeListItem("stat").title("Statistik").icon(TrendUpwardIcon),
      S.documentTypeListItem("service").title("Layanan").icon(ThLargeIcon),
      S.documentTypeListItem("project").title("Proyek").icon(CaseIcon),
      S.documentTypeListItem("processStep")
        .title("Tahapan Kerja")
        .icon(ClipboardIcon),
      S.documentTypeListItem("testimonial")
        .title("Testimoni")
        .icon(CommentIcon),
      S.documentTypeListItem("client").title("Klien").icon(UsersIcon),
      S.documentTypeListItem("teamMember").title("Tim").icon(UserIcon),
      S.documentTypeListItem("faq").title("FAQ").icon(HelpCircleIcon),
    ]);
