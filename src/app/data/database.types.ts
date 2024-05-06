export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      gallery: {
        Row: {
          caption: string | null;
          created_at: string;
          id: number;
          name: string | null;
          url: string | null;
        };
        Insert: {
          caption?: string | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          url?: string | null;
        };
        Update: {
          caption?: string | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          url?: string | null;
        };
        Relationships: [];
      };
      mailing_list: {
        Row: {
          created_at: string;
          email: string | null;
          id: number;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: number;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      music: {
        Row: {
          artist: string | null;
          created_at: string;
          genres: Json | null;
          id: number;
          img_url: string | null;
          link: string | null;
          other_artists: Json | null;
          title: string | null;
        };
        Insert: {
          artist?: string | null;
          created_at?: string;
          genres?: Json | null;
          id?: number;
          img_url?: string | null;
          link?: string | null;
          other_artists?: Json | null;
          title?: string | null;
        };
        Update: {
          artist?: string | null;
          created_at?: string;
          genres?: Json | null;
          id?: number;
          img_url?: string | null;
          link?: string | null;
          other_artists?: Json | null;
          title?: string | null;
        };
        Relationships: [];
      };
      posters: {
        Row: {
          address: string | null;
          artist: string | null;
          caption: string | null;
          created_at: string;
          date: string | null;
          genres: Json | null;
          id: number;
          other_artists: Json | null;
          slug: string | null;
          ticket_link: string | null;
          time_finish: string | null;
          time_start: string | null;
          title: string | null;
          url: string | null;
          venue: string | null;
        };
        Insert: {
          address?: string | null;
          artist?: string | null;
          caption?: string | null;
          created_at?: string;
          date?: string | null;
          genres?: Json | null;
          id?: number;
          other_artists?: Json | null;
          slug?: string | null;
          ticket_link?: string | null;
          time_finish?: string | null;
          time_start?: string | null;
          title?: string | null;
          url?: string | null;
          venue?: string | null;
        };
        Update: {
          address?: string | null;
          artist?: string | null;
          caption?: string | null;
          created_at?: string;
          date?: string | null;
          genres?: Json | null;
          id?: number;
          other_artists?: Json | null;
          slug?: string | null;
          ticket_link?: string | null;
          time_finish?: string | null;
          time_start?: string | null;
          title?: string | null;
          url?: string | null;
          venue?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
