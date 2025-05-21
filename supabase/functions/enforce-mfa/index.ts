import { serve } from 'https://deno.land/std/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
  )

  const { data: user, error } = await supabase.auth.getUser()

  if (error || !user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 })
  }

  const mfaVerified = user.user?.authentication_methods?.some(
    method => method.factor_type === "totp" && method.status === "verified"
  )

  if (!mfaVerified) {
    return new Response(JSON.stringify({ error: "MFA not verified" }), { status: 403 })
  }

  return new Response(JSON.stringify({ success: true }))
})