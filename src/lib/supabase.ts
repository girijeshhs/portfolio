import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// TypeScript types for database tables
export interface Project {
  id: string;
  created_at: string;
  title: string;
  description: string;
  long_description?: string;
  thumbnail: string;
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  featured: boolean;
  order: number;
  metrics?: ProjectMetric[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar_url?: string;
  github_url?: string;
  linkedin_url?: string;
  website_url?: string;
}

export interface Event {
  id: string;
  created_at: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  thumbnail?: string;
  registration_url?: string;
}

// Project queries
export async function fetchProjects(featured?: boolean) {
  try {
    let query = supabase
      .from('projects')
      .select('*')
      .order('order', { ascending: true });
    
    if (featured !== undefined) {
      query = query.eq('featured', featured);
    }

    const { data, error } = await query;

    if (error) throw error;
    return { data: data as Project[], error: null };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { data: null, error };
  }
}

export async function fetchProjectById(id: string) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data: data as Project, error: null };
  } catch (error) {
    console.error('Error fetching project:', error);
    return { data: null, error };
  }
}

// Member queries
export async function fetchMembers() {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;
    return { data: data as Member[], error: null };
  } catch (error) {
    console.error('Error fetching members:', error);
    return { data: null, error };
  }
}

// Event queries
export async function fetchEvents(upcoming?: boolean) {
  try {
    let query = supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });
    
    if (upcoming) {
      const today = new Date().toISOString().split('T')[0];
      query = query.gte('date', today);
    }

    const { data, error } = await query;

    if (error) throw error;
    return { data: data as Event[], error: null };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { data: null, error };
  }
}

// Real-time subscriptions
export function subscribeToProjects(
  callback: (payload: any) => void
) {
  return supabase
    .channel('projects-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'projects',
      },
      callback
    )
    .subscribe();
}

export function subscribeToEvents(
  callback: (payload: any) => void
) {
  return supabase
    .channel('events-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'events',
      },
      callback
    )
    .subscribe();
}
